import React from "react";
import { render } from "@testing-library/react-native";
import Areas from "../(ZAtomistica)/index";
import { useLocalSearchParams } from "expo-router";


jest.mock("expo-router", () => ({
  useLocalSearchParams: jest.fn(),
}));


jest.mock("@/components/TestCard", () => "TestCard");

describe('Areas Component', () => {
    const mockInformacoes = JSON.stringify([
        { numero: '1', icones: 'http://example.com/icon.png', texto: 'Informação 1' },
        { numero: '2', icones: 'http://example.com/icon.png', texto: 'Informação 2' },
    ]);
    
    const mockTestes = JSON.stringify([
        { id: '1', imagem: 'http://example.com/teste1.png', titulo: 'Teste 1', texto: 'Descrição do Teste 1', materia: 'Matéria 1' },
        { id: '2', imagem: 'http://example.com/teste2.png', titulo: 'Teste 2', texto: 'Descrição do Teste 2', materia: 'Matéria 2' },
    ]);

    beforeEach(() => {
        useLocalSearchParams.mockReturnValue({
            sobre: 'Sobre Teste',
            informacoes: mockInformacoes,
            testes: mockTestes,
            materia: 'Matéria',
            titulo: 'Título Teste',
        });
    });

    test('should render Areas component correctly', () => {
        const { getByText, getByTestId } = render(<Areas />);
        
        // Verifique se o título "Sobre Teste" está sendo exibido
        expect(getByText('Sobre Teste')).toBeTruthy();
        
        // Verifique se o texto "Informação 1" e "Informação 2" estão sendo exibidos
        expect(getByText('Informação 1')).toBeTruthy();
        expect(getByText('Informação 2')).toBeTruthy();
        
        // Verifique se a lista de testes foi renderizada
        expect(getByText('Teste 1')).toBeTruthy();
        expect(getByText('Teste 2')).toBeTruthy();
    });

    test('should render the correct number of information items', () => {
        const { getAllByText } = render(<Areas />);
        
        // Verifique se há exatamente dois itens de informação sendo renderizados
        expect(getAllByText(/Informação/).length).toBe(2);
    });

    test('should render the correct number of test items', () => {
        const { getAllByText } = render(<Areas />);
        
        // Verifique se há exatamente dois itens de teste sendo renderizados
        expect(getAllByText(/Teste/).length).toBe(2);
    });

    test('should handle empty informacoes or testes correctly', () => {
        // Mock de valores vazios
        useLocalSearchParams.mockReturnValueOnce({
            sobre: 'Sobre Teste',
            informacoes: '[]',
            testes: '[]',
            materia: 'Matéria',
            titulo: 'Título Teste',
        });

        const { getByText } = render(<Areas />);
        
        // Verifique se algum texto de "Informações" ou "Testes" vazio é exibido
        expect(getByText('Testes Disponíveis')).toBeTruthy();
    });
    
    test('should handle invalid or empty URL for images', () => {
        const invalidMockInformacoes = JSON.stringify([
            { numero: '1', icones: 'invalid_url', texto: 'Informação com URL inválida' },
        ]);

        useLocalSearchParams.mockReturnValueOnce({
            sobre: 'Sobre Teste',
            informacoes: invalidMockInformacoes,
            testes: mockTestes,
            materia: 'Matéria',
            titulo: 'Título Teste',
        });

        const { getByText } = render(<Areas />);

        // Verifique se o texto da informação com URL inválida aparece
        expect(getByText('Informação com URL inválida')).toBeTruthy();
    });
});


