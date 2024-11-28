import theme from "@/theme"; 
import { View, Text, SafeAreaView, FlatList } from "react-native";
import styled, { ThemeProvider } from "styled-components/native"; 
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator } from "react-native";


export default function Final(){
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '• Ligações iônicas, covalentes e metálicas',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '• Hibridização dos orbitais',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '• Forças de Van der Waals',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: '• Densidade, ponto de fusão e ponto de ebulição ',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d54',
      title: '• Solubilidade',
    },
  ];

        type ItemProps = {title: string};

        const Item = ({title}: ItemProps) => (
        <View>
            <Resultado>{title}</Resultado>
        </View>
        );

        const { acertos, questNum, titulo } = useLocalSearchParams();
        const acertosNumber = Number(acertos);
        const questNumNumber = Number(questNum);
        const porcentagem = Number(((acertosNumber / questNumNumber) * 100).toFixed(2));
        const erros = questNumNumber - acertosNumber
            if (acertos && questNum){
    return (
      
        <ThemeProvider theme={theme}>
            <Container>
                <Root>
                    <Section>
                        <Titulo>Resultado: </Titulo>
                        <SafeAreaView >
                        {porcentagem <= 69 ? (<Resultado> Você acertou menos de 70% do teste, considere estudar mais sobre este conteúdo </Resultado>) : (<Resultado> Parabéns seu nível nesse conteúdo é ótimo</Resultado>)}

                        <Text>Gabarito: </Text>
                        </SafeAreaView>
                    </Section>
                    <Main>
                        <Informacoes>
                        <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>Porcentagem:</Text>
                        <Text style={{fontSize: 50, color: '#fff'}}>{porcentagem}%</Text>
                        <Text style={{color: '#00bf63', fontWeight: 'bold'}}>{acertos} questões corretas</Text>
                        <Text style={{color: '#ff3131', fontWeight: 'bold'}}>{erros} questões incorretas</Text>
                        </Informacoes>

                        <View style={{backgroundColor: '#fff', height: 240, width: 3.5,}}></View>

                    <View style={{alignItems: 'center'}}>
                        <Porcentagem>
                            <InnerCircle>
                                <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>{acertos}/{questNum}</Text>
                            </InnerCircle>
                        </Porcentagem>
                        <Text style={{color: '#fff', fontSize: 16}}>Total de acertos</Text>
                    </View>
                    </Main>
                </Root>
            </Container>   
        </ThemeProvider>
  
    );
    }
    else{
        return(<ActivityIndicator />)
    }
}


const Container = styled.View`
    height: 100%;  
    background-color: ${({ theme }) => theme.COLORS.WHITE_BLUE}; 
`

const Section = styled.View`
    height: 350px;
    width: 400px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

const Main = styled.View`
    height: 350px;
    width: 500px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_350};
`

const Root = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 120px;
`

const Informacoes = styled.View`
    justify-content: center;
    align-items: center;
`

const Porcentagem = styled.View`
    height: 160px;
    width: 160px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_250};
`
const InnerCircle = styled.View`
    height: 140px;
    width: 140px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_250};
    border: 3px solid ${({ theme }) => theme.COLORS.WHITE};
`

const Titulo = styled.Text`
  font-size: 22;
  font-weight: bolder;
  padding: 12px;
  margin-left: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`

const Resultado = styled.Text`
  font-size: 18;
  font-weight: 600;
  padding: 12px;
  margin-left: 2px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`