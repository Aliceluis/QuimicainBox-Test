import theme from "@/theme"; 
import { useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import styled, { ThemeProvider } from "styled-components/native"; 
import { Pressable, ScrollView, Text, View } from "react-native";
import { Icon } from "react-native-elements"; 
import { FlatList, SafeAreaView } from "react-native";
import TestCard from "@/components/TestCard";
import { useLocalSearchParams } from "expo-router";
import { Informacoes } from "@/components/Header";
import { Key } from "react";

export default function Areas(){
    
    // const DATA = [
    //     {
    //         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //         imagem: '../../assets/images/Icons/atom.png',
    //         titulo: 'Modelos atômicos',
    //         texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    //         materia: 'sla'
    //     },
    //     {
    //         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //         imagem: '../../assets/images/Icons/atom.png',
    //         titulo: 'Estrutura Atômica',
    //         texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    //         materia: 'sla'
    //     },
    //     {
    //         id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
    //         imagem: '../../assets/images/Icons/atom.png',
    //         titulo: 'Configuração eletrônica',
    //         texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    //         materia: 'sla'
    //     },
    //     {
    //         id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
    //         imagem: '../../assets/images/Icons/atom.png',
    //         titulo: 'Radioatividade',
    //         texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    //         materia: 'sla'
    //     },
    //   ];
    
    const{sobre, informacoes, testes} = useLocalSearchParams<{sobre: string, 
        informacoes: string,
        testes: string, materia: string, titulo:string}>();

    return(
        <ScrollView>
            <ThemeProvider theme={theme}>
                <Container>
                    <Title>
                        <Label>
                        <StyledImage
                        source={{ uri: '../../assets/images/question(1).png' }} // URL temporária
                    /> Sobre {sobre}</Label>
                    </Title>
                    <Title2></Title2>
                <Section>
                    {JSON.parse(informacoes).map((info: Informacoes , index:Key)=>{
                        return(
                            <Topicos key={index}>
                                <Numero>{info.numero}</Numero>
                                <Card>
                                    <Icones source={{uri: info.icones}}/>
                                    <Text style={{fontSize: 16}}>{info.texto}</Text>
                                </Card>
                            </Topicos>
                        )
                    })}
                </Section>
                <Title>
                    <Label>
                    <StyledImage
                        source={{ uri: '../../assets/images/chemical copy.png' }} // URL temporária
                    /> Testes Disponíveis</Label>
                </Title>
                <Title2></Title2>
                <SafeAreaView>
                <FlatList style={{marginBottom: 50, flexGrow: 1}}
                        data={JSON.parse(testes)}
                        renderItem={({item}) => <TestCard
                            imagem={item.imagem}
                            titulo={item.titulo}
                            texto={item.texto}
                            materia={item.materia} 
                        />}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}                
                    />
                </SafeAreaView>
            </Container>   
        </ThemeProvider>
        </ScrollView>
                            
    );
}


const Container = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE_BLUE}; 
`

const Title = styled.View`
    width: 100%;
    padding-top: 40px;
    
 
`
const Title2 = styled.View`
    width: 42%;
    height:5px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200}; 
    border-bottom-right-radius: 1.5rem;
    margin-left:-1000px;
`

const Label = styled.Text`
    text-align: end ;
    padding:10px;
    width: 40%;
    font-weight: bolder;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size:23px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_700}; 
    font-style:italic;
 
`
const Titulo = styled.Text`
    text-align: center;
    font-weight: bolder;
    font-size: 25px;
 
`
const Conteudo = styled.Text`
    text-align: center;
    font-size: 16px;
 
`
const Section = styled.View`
    margin: 16px;
    width:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    border-radius: 1rem;
`

const Topicos = styled.View`
    width: 1000px;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    border-radius: 2rem;
    gap:20px;
`

const Numero = styled.View`
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BLUE_500}; 
    border-radius: 50%;
`

const Card = styled.View`
    height: 130px;
    width: 800px; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    padding: 1.2rem;
    gap: 30px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

const Icones = styled.Image`
    height: 60px;
    width: 60px;
`


const Testes = styled.View`
    height: 350px;
    width: 300px; 
    align-items: center;
    margin-top: 80px;
    margin-left: 30px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`
const Button = styled.TouchableOpacity`
    height: 40px;
    width: 110px; 
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_300};
`
const StyledImage = styled.Image`
    width: 35px;
    height: 35px;
    padding-left:20px;
   
    
`