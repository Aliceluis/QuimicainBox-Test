import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import styled from 'styled-components/native';

type Props ={
    funcaoArea: Function,
    funcaoSubArea: Function,
    funcaoNivel: Function
}

interface Area {
    id: string;
    tipo: string;
}

interface Subarea {
    id: string;
    descricao: string;
    id_area: string;
}

export default function DropdownComponent({funcaoArea, funcaoSubArea, funcaoNivel}: Props)
{
    const [selectedArea, setSelectedArea] = useState<string>('');
    const [selectedSubarea, setSelectedSubarea] = useState<string>('');
    const [selectedNivel, setSelectedNivel] = useState<string>('');
    const [areas, setAreas] = useState<Area[]>([]);
    const [subareas, setSubareas] = useState<Subarea[]>([]);
    const [filteredSubareas, setFilteredSubareas] = useState<Subarea[]>([]);

    const fetchData = async () => {
        try {
            const areaResponse = await fetch('http://192.168.1.3:3000/areas');
            if (!areaResponse.ok) throw new Error("Erro ao buscar áreas");
            const areaData: Area[] = await areaResponse.json();
            console.log("Áreas carregadas:", areaData);
            setAreas(areaData);

            const subareaResponse = await fetch('http://192.168.1.3:3000/subareas');
            if (!subareaResponse.ok) throw new Error("Erro ao buscar subáreas");
            const subareaData: Subarea[] = await subareaResponse.json();
            console.log("Subáreas carregadas:", subareaData);
            setSubareas(subareaData);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };
    

    useEffect(() => {
        fetchData();
    }, []);

    // Atualiza as subáreas filtradas quando a área selecionada é alterada
    useEffect(() => {
            const filtered = subareas.filter((subarea: Subarea)=>{
                return subarea.id_area == selectedArea
            });
            console.log(`Subáreas filtradas para área ${selectedArea}:, filtered`);
            setFilteredSubareas(filtered);
            // setSelectedSubarea(''); // Limpa a seleção anterior

            //setFilteredSubareas([]);
    }, [selectedArea, subareas]);

    return (
        <ViewPicker>
            <PickerContainer>
                <StyledPicker
                    selectedValue={selectedArea}
                    onValueChange={(itemValue) => {
                        console.log("Área selecionada:", itemValue);
                        setSelectedArea(itemValue as string);
                        funcaoArea(itemValue)
                    }}
                >
                    <Picker.Item label="Selecione a Área" value="0" />
                    {areas.map((area) => (
                        <Picker.Item key={area.id} label={area.tipo} value={area.id} /> 
                    ))}
                </StyledPicker>
            </PickerContainer>

            <PickerContainer>
                <StyledPicker
                    selectedValue={selectedSubarea}
                    onValueChange={(itemValue) => {
                        console.log("Subárea selecionada:", itemValue);
                        setSelectedSubarea(itemValue as string);
                        funcaoSubArea(itemValue)
                    }}
                    enabled={!!selectedArea} // Habilita somente se uma área for selecionada
                >
                    <Picker.Item label="Selecione a Subárea" value="0" />
                    {filteredSubareas.map((subarea) => (
                        <Picker.Item key={subarea.id} label={subarea.descricao} value={subarea.id} /> 
                    ))}
                </StyledPicker>
            </PickerContainer>

            <PickerContainer>
                <StyledPicker
                    selectedValue={selectedNivel}
                    onValueChange={(itemValue) => {
                        setSelectedNivel(itemValue as string)
                        funcaoNivel(itemValue)
                    }}
                >
                    <Picker.Item label="Selecione o Nível" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                </StyledPicker>
            </PickerContainer>
        </ViewPicker>
    );
};

const PickerContainer = styled.View`
    border-radius: 10px;
    margin: 10px 0;
    padding: 5px;
`;

const StyledPicker = styled(Picker)`
    height: 50px;
    width: 100%;
    color: #333;
    border-radius: 10px;
`;

const ViewPicker = styled.View`
  flex-direction: row;
  gap: 15px;
  margin: 20px;
`;