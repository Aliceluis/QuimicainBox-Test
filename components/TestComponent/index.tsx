import { Link } from "expo-router"
import { Text } from "react-native-elements"
import styled from "styled-components/native"

type Props = {
    pergunta: string,
    a: string,
    b: string,
    c: string,
    d: string,
    e: string,
}

export default function TestCard({pergunta, a, b, c, d, e}: Props){
    return(<Container>
            
                    

                    <Main>
                        <Pergunta>{pergunta}</Pergunta>

                        <Alternativas>
                            <A>
                                <Botao>A</Botao>
                                <Text>{a}</Text>
                            </A>
                            <A>
                                <Botao>B</Botao>
                                <Text>{b}</Text>
                            </A>
                            <A>
                                <Botao>C</Botao>
                                <Text>{c}</Text>
                            </A>
                            <A>
                                <Botao>D</Botao>
                                <Text>{d}</Text>
                            </A>
                            <A>
                                <Botao>E</Botao>
                                <Text>{e}</Text>
                            </A>
                        
                        </Alternativas>
                    </Main>
                   


    </Container>)
}


const Container = styled.ScrollView` 
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE_BLUE}; 
    
`

const Primeiro = styled.View`
    height: 35px;
    width: 170px;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_100}; 
`

const Segundo = styled.View`
    height: 35px;
    width: 100px;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_250}; 
`
const Texto = styled.Text`
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}; 

`

const Main = styled.View`   
    width: 1000px;
    height: 500px;
    margin-bottom: 25px;
    align-items: center; 
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
`

const Alternativas = styled.View`
    gap: 10px;
    margin-top: 25px;
    margin-right: 540px;
    flex-direction: column;
    
`

const A = styled.Pressable`   
    flex-direction: row;
    gap: 10px;
    align-items: center;
  
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
`

const Botao = styled.TouchableOpacity`   
    border-width: 2px;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border-color: ${({ theme }) => theme.COLORS.BLUE_300}; ;

`

const Pergunta = styled.Text`
    width: 800px;
    text-align: start;
    margin-top: 30px;
`

