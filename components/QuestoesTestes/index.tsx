import { Link } from "expo-router"
import { Text } from "react-native-elements"
import styled from "styled-components/native"

type Props = {
    titulo: string,
    texto: string,
    instrucoes: string,
    seta: string,
    questoes: string
}

export default function QuestoesTeste({}: Props){
    return(<Container>
            
    </Container>
    )
}

const Container= styled.View`
    height: 350px;
    width: 300px; 
    align-items: center;
    margin-top: 80px;
    margin-left: 30px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
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

const Imagem = styled.Image`
    height: 100px;
    width: 100px;
    margin-top: 200px;
    margin-left:200px;
`

const Botao = styled.TouchableOpacity`
    height: 40px;
    width: 110px; 
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_300};
`