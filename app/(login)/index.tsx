import styled, { ThemeProvider } from "styled-components/native";
import { View, Image, Text } from "react-native";
import { Input, Icon } from "react-native-elements";
import { useState, useCallback } from "react";
import { Link, router, useFocusEffect } from "expo-router";
import theme from "@/theme";
import { apiConfig } from "@/Utils/axios";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setPasswordVisible(true);
      setLoginError(false);
      setEmail("");
      setPassword("");
      setEmailError(false);
      setPasswordError(false);
    }, [])
  );

  // Função de login
  async function loginFunc() {
    // Resetar erros anteriores
    setEmailError(false);
    setPasswordError(false);

    // Verificar campos vazios
    if (!email || !password) {
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }

    try {
      const res = await apiConfig.post("/login", {
        email,
        senha: password,
      });

      if (res.status === 204) {
        setLoginError(true);
      } else {
        router.push("/(Pagprof)");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Voltar>
      <Link href='/(Inicial)'>
                        <Icon style={{alignItems:'center', justifyContent:'center'}}
                            name="arrow-back"
                            type="material" 
                            color='#00507D'
                            size={30}
                        />
                        </Link>
                        </Voltar>
        <Section>
          <Info>
            <Image
              style={{ height: 100, width: 300 }}
              source={require("../../assets/images/Logo.png")}
            />
          </Info>
          <Caixa>
            <View style={{ marginTop: 40 }}>
              <Title>Login</Title>
              <Subtitle2>Acesse a página do professor!</Subtitle2>
            </View>

            <View style={{ gap: 20 }}>
              {/* Campo de email */}
              <Input
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailError(false); // Limpar erro do campo vazio
                  setLoginError(false); // Limpar mensagem de erro de login
                }}
                value={email}
                inputStyle={{
                  fontStyle: "italic",
                }}
                leftIcon={
                  <Icon
                    name="mail"
                    type="material"
                    size={22}
                    color={theme.COLORS.BLUE_500}
                  />
                }
                errorMessage={emailError ? "O campo de email está vazio." : ""}
                errorStyle={{ color: theme.COLORS.RED }}
                containerStyle={{
                  borderColor: emailError ? theme.COLORS.RED : undefined,
                  borderWidth: emailError ? 1 : undefined,
                }}
              />

              {/* Campo de senha */}
              <Input
                placeholder="Senha"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError(false); // Limpar erro do campo vazio
                  setLoginError(false); // Limpar mensagem de erro de login
                }}
                secureTextEntry={passwordVisible}
                leftIcon={
                  <Icon
                    name="lock"
                    type="material"
                    size={22}
                    color={theme.COLORS.BLUE_500}
                  />
                }
                inputStyle={{
                  fontStyle: "italic",
                }}
                rightIcon={
                  password.length > 0 && (
                    <Icon
                      name={passwordVisible ? "visibility-off" : "visibility"}
                      type="material"
                      size={22}
                      color={theme.COLORS.BLUE_500}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  )
                }
                errorMessage={passwordError ? "O campo de senha está vazio." : ""}
                errorStyle={{ color: theme.COLORS.RED }}
                containerStyle={{
                  borderColor: passwordError ? theme.COLORS.RED : undefined,
                  borderWidth: passwordError ? 1 : undefined,
                }}
              />
            </View>

            {/* Botão de login */}
            <View style={{ gap: 30 }}>
              <Button onPress={loginFunc}>
                <Text style={{ color: "#fff" }}>Entrar</Text>
              </Button>
              {loginError && (
                <Text style={{ color: theme.COLORS.RED, textAlign: "center" }}>
                  Login ou senha incorretos.
                </Text>
              )}
            </View>
          </Caixa>
        </Section>
      </Container>
    </ThemeProvider>
  );
}

// Estilizações
const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.COLORS.WHITE_BLUE};
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.BLUE_500};
  margin-top: 2rem;
  text-align: center;
  font-style: italic;
`;

const Subtitle2 = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 19px;
`;

const Info = styled.View`
  height: 35rem;
  width: 30rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  box-shadow: 4px 7px 4px ${({ theme }) => theme.COLORS.GRAY_300};
`;

const Caixa = styled.View`
  height: 35rem;
  width: 25rem;
  align-items: center;
  gap: 4rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  box-shadow: 2px 7px 6px ${({ theme }) => theme.COLORS.GRAY_300};
`;

const Button = styled.Pressable`
  height: 2.5rem;
  width: 10rem;
  border-radius: 0.7rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_500};
`;
const Voltar = styled.View`
  border: solid 2px;
  align-items:center;
  justify-content:center;
  border-color: ${({ theme }) => theme.COLORS.BLUE_500};
  border-radius:100%;
  margin-top:10px;
  margin-left:7px;
  height:40px;
  width:40px;
  margin-left:5px;
`;

function loadData(controller: AbortController) {
    throw new Error("Function not implemented.");
}