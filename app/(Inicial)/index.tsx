
import theme from "@/theme"; 
import { useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import styled, { ThemeProvider } from "styled-components/native"; 
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { Icon } from "react-native-elements";
import IndividualIntervalsExample from "@/components/Carousel";
import { Image, View } from "react-native";

export default function Home(){

    const [fontsLoaded, fontError] = useFonts({
        Inter_500Medium,
        Inter_700Bold,
      });

      useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);
    
    return (
      
        <ThemeProvider theme={theme}>
        <Container>
        <IndividualIntervalsExample/>
             <Section>
                <Card>
                    <Icon style={{alignItems: 'flex-start', paddingLeft: 14}}
                    name="auto-stories"
                    type="material"
                    color={theme.COLORS.BLUE_500} 
                    size={37}
                    />
                    <Title>Sobre o projeto...</Title>
                    <Content>O Química In Box é um projeto desenvolvido a partir de percepções de professores e alunos do Ensino Médio acerca dos desafios de compreender e mapear os níveis de proficiência de cada estudante para o ensino e a aprendizagem em química. </Content>

                </Card>

                <Card>
                    <Icon style={{alignItems: 'flex-start', paddingLeft: 14}}
                    name="auto-stories"
                    type="material"
                    color={theme.COLORS.BLUE_500} 
                    size={37}
                    />
                    <Title>Objetivos...</Title>
                    <Content>O projeto *Química In Box* fragmenta a química em grandes áreas, adotando uma abordagem específica para o Ensino Médio. Ele oferece gratuitamente testes para que os alunos avaliem suas proficiências em cada subárea e personalizem seus estudos com base nos resultados.</Content>

                    
                </Card>

                <Card>
                    <Icon style={{alignItems: 'flex-start', paddingLeft: 14}}
                    name="auto-stories"
                    type="material"
                    color={theme.COLORS.BLUE_500} 
                    size={37}
                    />
                    <Title>Função..</Title>
                    <Content>Organiza testes para subáreas como Atomística, Química Geral, Inorgânica, Físico-química e Orgânica. Cada teste traz exercícios variados em níveis de proficiência, gerando ao final um relatório personalizado com os acertos e erros na subárea escolhida.</Content>

                    
                </Card>
            </Section>  
        </Container>   
    </ThemeProvider>

);
}


const Container = styled.View`
height: 100%;  
background-color: ${({ theme }) => theme.COLORS.WHITE_BLUE}; 
`

const Card = styled.View`
height: 11rem;
width: 26rem;   
margin:20px;
border-radius: 1rem;
margin-top: -110;
border-bottom-color:  ${({ theme }) => theme.COLORS.BLUE_300};
border-bottom-width: 3.6px;
    
background-color: ${({ theme }) => theme.COLORS.WHITE}; 


`

const Section = styled.View`
flex-direction: row;
align-items:center;
justify-content:center;
`

const Title = styled.Text`
padding-left: 1rem;
font-size: 1.2rem;
font-weight: bold;
font-style: italic
`
const Content = styled.Text`
width: 25rem;
padding-left: 1rem;


`

const Banner = styled.Image`
height: 100%; 
width: 100%;
margin-top: -180;


`