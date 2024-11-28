import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Home from '../(Inicial)/index'; 
import theme from '@/theme';
import { ThemeProvider } from 'styled-components/native';
import { SplashScreen } from 'expo-router';


jest.mock('expo-router', () => ({
  SplashScreen: {
    hideAsync: jest.fn(),
  },
}));

jest.mock('@expo-google-fonts/inter', () => ({
  useFonts: jest.fn(() => [true, false]), 
  Inter_500Medium: jest.fn(),
  Inter_700Bold: jest.fn(),
}));

describe('Home Component', () => {
  test('deve renderizar o componente corretamente', async () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    expect(getByText('Sobre o projeto...')).toBeTruthy();
    expect(getByText('Objetivos...')).toBeTruthy();
    expect(getByText('Função..')).toBeTruthy();
    expect(getByTestId('carousel')).toBeTruthy();
  });

  test('deve esconder o SplashScreen após carregar as fontes', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

   
    await waitFor(() => {
      expect(SplashScreen.hideAsync).toHaveBeenCalled();
    });
  });

  test('ícones devem ser renderizados corretamente', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

  
    const icons = getAllByTestId('icon');
    expect(icons.length).toBe(3);
  });
});
