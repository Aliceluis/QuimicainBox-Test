import theme from "@/theme";
import styled, { ThemeProvider } from "styled-components/native";
import React, { useEffect, useState, useCallback, Key } from "react";
import {Pressable, Image, PressableProps, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView, FlatList } from "react-native";
import { apiConfig } from "@/Utils/axios";
import { Informacoes, Testes } from "@/components/Header"
import { ActivityIndicator } from "react-native";
import { Link, usePathname, useRouter, router, useLocalSearchParams} from "expo-router";

type Questoes = {
    id: string,
    enunciado: string,
    imagem: string,
    alternativa_a: string,
    alternativa_b: string,
    alternativa_c: string,
    alternativa_d: string,
    alternativa_e: string,
    correta: string,
    nivel: string
}

type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Alternativa = PressableProps & {
    type: ButtonTypeStyleProps
}

export default function Form() {
    const [questoes, setQuestoes] = useState<Questoes[]>([])
    const [chosenAlt, setChosenAlt] = useState<(string | null)[]>(Array(questoes.length).fill(null));
    const [chosenQuest, setChosenQuest] = useState(0)

        useEffect(() => {
            apiConfig.get(`/teste/${materia}`).then((res) => {
              // Valide a resposta da API aqui
              if (Array.isArray(res.data)) {
                setQuestoes(res.data);
                
              } else {
                console.error("Resposta inesperada da API:", res.data);
              }
            }).catch((error) => {
              console.error("Erro ao buscar sessões:", error);
            });
        },[]);

        function selectalt(questIndex: number, alt: string) {
            setChosenAlt((prevChosenAlt) => {
              const updatedAlt = [...prevChosenAlt]; // Faz uma cópia do array
              updatedAlt[questIndex] = updatedAlt[questIndex] === alt ? null : alt; // Alterna entre a alternativa e null
              return updatedAlt;
            });
          }
          
         function chooseQuest(soma: boolean) {
          if (soma) {
            if (chosenQuest >= questoes.length -1) {
            } 
            else{
              setChosenQuest(chosenQuest + 1)
            }
          }
          else{
            if (chosenQuest <= 0) {
            } 
            else{
              setChosenQuest(chosenQuest - 1)
            }
          }
         }

         
        function finalizar() {
            let totalAcertos = 0; // Variável temporária para contar os acertos
        
            for (let i = 0; i < questoes.length; i++) {
                if (chosenAlt[i] === questoes[i].correta) {
                    totalAcertos++; // Incrementa a contagem de acertos
                }
            }
            console.log('Você acertou', totalAcertos, 'de', questoes.length);
            router.push({
                pathname: "/(Resultado)",
                params: { acertos: totalAcertos, questNum: questoes.length },
              });
            // Aqui você também pode adicionar um feedback para o usuário, como um alerta ou navegação para outra tela
        }

        const{titulo, texto, materia} = useLocalSearchParams<{titulo: string,
            texto: string,
            materia: string}>();
        


        if(questoes.length){
            return (

        <ThemeProvider theme={theme}>
            <Container showsVerticalScrollIndicator={false}>
                <Section>
                <Separar>
                    <Title>{titulo}</Title>
                    <Conteudo>{texto}</Conteudo>
                </Separar>
                    <Cards>
                        <Info>
                            <Icon style={{ paddingLeft: 10 }}
                                name="check"
                                type="material"
                                color='#04e762'
                                size={40}
                            />
                            <Text style={{ color: '#fff', fontWeight: 'bold', width: 290 }}>Escolha um local tranquilo para realizar o teste.</Text>
                        </Info>

                        <Info>
                            <Icon style={{ alignItems: 'flex-start', paddingLeft: 10 }}
                                name="check"
                                type="material"
                                color='#04e762'
                                size={40}
                            />
                            <Text style={{ color: '#fff', fontWeight: 'bold', width: 290 }}>Não utilize materiais de consulta.</Text>
                        </Info>

                        <Info>
                            <Icon style={{ alignItems: 'flex-start', paddingLeft: 10 }}
                                name="check"
                                type="material"
                                color='#04e762'
                                size={40}
                            />
                            <Text style={{ color: '#fff', fontWeight: 'bold', width: 290 }}>Responda de acordo com seus conhecimentos.</Text>
                        </Info>

                        <Info>
                            <Icon style={{ alignItems: 'flex-start', paddingLeft: 10 }}
                                name="check"
                                type="material"
                                color='#04e762'
                                size={40}
                            />
                            <Text style={{ color: '#fff', fontWeight: 'bold', width: 290 }}>O teste devolverá seu resultado.</Text>
                        </Info>
                    </Cards>
                </Section>

                <Icon style={{ marginTop: 20 }}
                    name="south"
                    type="material"
                    color='#1d64d0'
                    size={80}
                />
                
                <Questoes>
                    <Titulo>
                        <Primeiro>
                            <Texto>{materia}</Texto>
                        </Primeiro>
                        <Segundo>
                        </Segundo>
                    </Titulo>
                    <Main>
                    <SafeAreaView style={{ alignItems: 'center' }}>
                        
                    <Container2>
                        <Text style={{
                            fontSize: 17, width: 1000, padding: 20, backgroundColor: '#fff', flexDirection: "column" }}>
                            {questoes[chosenQuest].enunciado}
                        </Text>

                    <Imagemteste source={{uri: questoes[chosenQuest].imagem}} style={{height: 100, width: 100}}/>
                   
                    <View style={{gap: 10}}>
                        <View style={{flexDirection: 'row', padding: 10,}}>                 
                        {chosenAlt[chosenQuest] === "a" ? (
                            <Botao type="PRIMARY" onPress={() => selectalt(chosenQuest, "a")}>
                                <Text>a</Text>
                            </Botao>
                        ) : <Botao type="SECONDARY" onPress={() => selectalt(chosenQuest, "a")}>
                                <Text>a</Text>
                            </Botao>}
                        <Text style={{fontSize: 18, height: 30, width: 900, borderRadius: 100,  marginLeft: 10, backgroundColor: '#fff'}}>
                            {questoes[chosenQuest].alternativa_a}
                        </Text>
                        </View>

                        <View style={{flexDirection: 'row', padding: 10}}> 
                        {chosenAlt[chosenQuest] === "b" ? (
                            <Botao type="PRIMARY" onPress={() => selectalt(chosenQuest, "b")}>
                                <Text>b</Text>
                            </Botao>
                        ) : <Botao type="SECONDARY" onPress={() => selectalt(chosenQuest, "b")}>
                                <Text>b</Text>
                            </Botao>}
                        <Text style={{fontSize: 18, height: 30, width: 900,  borderRadius: 100,  marginLeft: 10, backgroundColor: '#fff'}}>
                            {questoes[chosenQuest].alternativa_b}
                            </Text>
                        </View>

                        <View style={{flexDirection: 'row', padding: 10}}> 
                        {chosenAlt[chosenQuest] === "c" ? (
                            <Botao type="PRIMARY" onPress={() => selectalt(chosenQuest, "c")}>
                                <Text>c</Text>
                            </Botao>
                        ) : <Botao type="SECONDARY" onPress={() => selectalt(chosenQuest, "c")}>
                                <Text>c</Text>
                            </Botao>}
                        <Text style={{fontSize: 18, height: 30, width: 900, borderRadius: 100, marginLeft: 10, backgroundColor: '#fff'}}>{questoes[chosenQuest].alternativa_c}</Text>
                        </View>

                        <View style={{flexDirection: 'row', padding: 10}}> 
                        {chosenAlt[chosenQuest] === "d" ? (
                            <Botao type="PRIMARY" onPress={() => selectalt(chosenQuest, "d")}>
                                <Text>d</Text>
                            </Botao>
                        ) : <Botao type="SECONDARY" onPress={() => selectalt(chosenQuest, "d")}>
                                <Text>d</Text>
                            </Botao>}
                        <Text style={{fontSize: 18, height: 30, width: 900, borderRadius: 100,  marginLeft: 10, backgroundColor: '#fff'}}>{questoes[chosenQuest].alternativa_d}</Text>
                        </View>

                        <View style={{flexDirection: 'row', padding: 10}}> 
                        {chosenAlt[chosenQuest] === "e" ? (
                            <Botao type="PRIMARY" onPress={() => selectalt(chosenQuest, "e")}>
                                <Text>e</Text>
                            </Botao>
                        ) : <Botao type="SECONDARY" onPress={() => selectalt(chosenQuest, "e")}>
                                <Text>e</Text>
                            </Botao>}
                        <Text style={{fontSize: 18, height: 30, width: 900, borderRadius: 100, marginLeft: 10, backgroundColor: '#fff'}}>{questoes[chosenQuest].alternativa_e}</Text>
                        </View>

                  
                        <View style={{flexDirection: 'row', padding: 10}}> 
                        {chosenAlt[chosenQuest] === "f" ? (
                            <Naosei type="PRIMARY" onPress={() => selectalt(chosenQuest, "f")}>
                                <Text>Não sei</Text>
                            </Naosei>
                        ) : <Naosei type="SECONDARY" onPress={() => selectalt(chosenQuest, "f")}>
                                <Text>Não sei</Text>
                            </Naosei>}
                        </View>

                        </View>

                   
                        <View style={{flexDirection: 'row', gap: 700, justifyContent: 'center', marginTop: 90}}>
                        <Trocar disabled={chosenQuest <= 0} onPress={() => chooseQuest(false)}>
                            <Text style={{color: '#fff'}}>Anterior</Text>
                        </Trocar>

                        {chosenQuest < questoes.length - 1 ? (
                            <Trocar onPress={() => chooseQuest(true)}>
                            <Text style={{color: '#fff'}}>Próximo</Text>
                            </Trocar>
                        ) : (
                           
                            <Trocar onPress={()=>finalizar()}> 
                            <Text style={{color: '#fff'}}>Finalizar</Text>
                            </Trocar>
                        )}
                        </View>

                    
                
        </Container2>   

                </SafeAreaView>
                    </Main>
                </Questoes>
            </Container>
        </ThemeProvider>

    );}
    else{
        return(<ActivityIndicator />)
    }
} 


const Container = styled.ScrollView` 
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE_BLUE}; 
    
`

const Container2 = styled.ScrollView` 
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
    
`

const Section = styled.View`
    flex-direction: row;
    height: 430px;  
    justify-content: center;
    align-items: center;
    gap: 200px;
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
`

const Title = styled.Text`
    font-size: 38; 
    color: ${({ theme }) => theme.COLORS.BLUE_300}; 
    font-weight: bolder;
    width: 350px;
`
const Conteudo = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}; ;
    color: ${({ theme }) => theme.COLORS.GRAY_300}; 
    font-weight: bolder;
    width: 430px;
`

const Separar = styled.View`
    gap: 10px
`

const Cards = styled.View`
    gap: 10px;
`

const Info = styled.View`
    height: 55px;
    width: 300px;
    border-radius: 15px;
    gap: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_300}; 
`

const Questoes = styled.View`
    margin-top: 130px;
    justify-content: center;
    align-items: center;
`

const Titulo = styled.View`
    width: 1000px;
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.BLUE_250}; 
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

const Botao = styled(Pressable)<Alternativa>`   
    border-width: 2px;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border-color: ${({ theme }) => theme.COLORS.BLUE_300};
    background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.WHITE};
`

const Imagemteste = styled.Image`   
    height: 300px;
    width: 300px;
    justify-content: center;
    align-items: center;
 
`

const Naosei = styled(Pressable)<Alternativa>`   
    border-width: 2px;
    height: 30px;
    width: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_400};
    background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.WHITE};
`

const Pergunta = styled.Text`
    width: 800px;
    text-align: start;
    margin-top: 30px;
`

const Trocar = styled.Pressable<{ disabled?: boolean }>`
    height: 28px;
    width: 110px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
    background-color: ${({ theme, disabled }) =>
        disabled ? theme.COLORS.GRAY_500 : theme.COLORS.BLUE_500};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;