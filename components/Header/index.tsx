import theme from "@/theme";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled, { ThemeProvider } from "styled-components/native";
import { Link } from "expo-router";
import { Icon } from 'react-native-elements';

export type Informacoes = {
    numero: number,
    icones: string,
    texto: string
} 
export type Testes =   {
    id: string,
    imagem: string,
    titulo: string,
    texto: string,
    materia: number,
 
}

export default function Header(){
    
    const testesAtomistica: Testes[] = [
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Estrutura Atômica',
        texto: 'A estrutura atômica, base da química, consiste em um núcleo com prótons e nêutrons, rodeado por elétrons em níveis de energia.',
        materia: 1,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Modelos Atômicos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 3,
       
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91af63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Configuração eletrônica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 4,
        
    },
    {
        id: '3acafc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Radioatividade',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 2,
    }]

    const informacoesAtomistica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Atomo.png',
            texto: 'A Atomística é uma área da Química que estuda os átomos, suas estruturas e propriedades. Um átomo é a menor unidade que forma toda a matéria do universo, composta por três partículas principais: prótons, nêutrons e elétrons. Essa área investiga desde a origem dos conceitos atômicos até as interações que dão origem às propriedades dos materiais.'
        },
        {
            numero: 2,
            icones: '../../assets/images/atom2.png',
            texto: 'A Atomística é essencial para a ciência moderna, pois explica a composição e os comportamentos dos materiais. Ela permite a criação de tecnologias como semicondutores, medicamentos e energias limpas. Além disso, ajuda a entender as características naturais, desde respostas químicas simples até a formação de estrelas no universo. Estudar os átomos é desvendar os segredos que sustentam tudo o que existe ao nosso redor.'
        },
        {
            numero: 3,
            icones: '../../assets/images/atom3.png',
            texto: 'Nessa área da Química apresentamos quatro testes que englobam as tendências dos conteúdos para o Ensino Médio e exercícios dos Vestibulares do Estado de São Paulo. Os testes para esse bloco são: modelos atômicos, estrutura atômica, configuração eletrônica e radioatividade.  '
        }
    ]

    const testesQuimicaGeral: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2a',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Propriedades da matéria',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 5
    },
    {
        id: '3ac68afc-c605-4d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Substâncias químicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 6
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Separação de misturas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 7
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Tabela periódica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 8
    },
    {
        id: '3a768afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Propriedades periódicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 9
    },
    {
        id: '3ac68afc-c605-486523-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Ligações químicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 10
    },
    {
        id: '3ac64sg88afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Geometria molecular e Polaridade',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 11
    },
    {
        id: '3ac68afc-c605-48dsrbhthsra7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Forças intermoleculares',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 12
    },
    {
        id: '3adfrvare8afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Leis ponderais',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 13
    },
    {
        id: '3ac68afc-c60vfdb48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Reações químicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 14
    },
    {
        id: '3adsv8afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Quantidade de matéria',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 15
    },
    {
        id: '87ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Gases e transformações gasosas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 16
    },
    {
        id: '625ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Estequiometria',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 17
    }]

    const informacoesQuimicaGeral: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/geral1.png',
            texto: 'A Química Geral é a área da Química que estuda os fundamentos dessa ciência, incluindo os princípios básicos que regem a matéria e suas transformações. Ela abrange conceitos como a estrutura dos átomos, ligações químicas, reações químicas, leis ponderais, estados físicos da matéria e as propriedades das substâncias. Esses conhecimentos formam a base para todas as áreas da química, como a orgânica, a inorgânica e a físico-química.'
        },
        {
            numero: 2,
            icones: '../../assets/images/geral22.png',
            texto: 'A Química Geral é fundamental para entender as consequências do cotidiano e os processos industriais. Ela explica, por exemplo, como ocorre a formação de compostos, as interações entre diferentes substâncias e as leis que governam essas transformações. Além disso, servem como base para o desenvolvimento de tecnologias em áreas como saúde, energia e meio ambiente, contribuindo para a evolução científica e tecnológica de um país.'
        },
        {
            numero: 3,
            icones: '../../assets/images/geral3.png',
            texto: 'Nessa área da Química apresentamos treze testes que englobam as tendências dos conteúdos para o Ensino Médio e exercícios dos Vestibulares do Estado de São Paulo. Os testes para esse bloco são: propriedades da matéria, substâncias químicas, separação de misturas, tabela periódica, propriedades periódicas, ligações químicas, geometria e polaridade molecular, forças intermoleculares, leis ponderais, reações químicas, quantidade de matéria, gases e transformações gasosas e estequiometria.'
        }
    ]

    const testesInorganica: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/lattice.png',
        titulo: 'Ácidos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 18
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/lattice.png',
        titulo: 'Bases',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 19
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/lattice.png',
        titulo: 'Sais',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 20
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/lattice.png',
        titulo: 'Óxidos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 21
    },
    {
        id: '3ac68afc5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/lattice.png',
        titulo: 'Reações Inorgânicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 22
    },]

    const informacoesInorganica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Inorganic1.png',
            texto: 'A Química Inorgânica é a área da Química que estuda os compostos que não são baseados em carbono, como sais, ácidos, bases, óxidos e metais. Ela explora as propriedades, estruturas, respostas e aplicações desses materiais, além de investigar as ligações químicas que os formam. Esse campo abrange desde os elementos da tabela periódica até compostos.'
        },
        {
            numero: 2,
            icones: '../../assets/images/Inorganic2.png',
            texto: 'A Química Inorgânica tem um papel crucial na ciência e na tecnologia, sendo aplicada em áreas como indústria, agricultura e medicina. Ela é essencial para o desenvolvimento de fertilizantes, metais resistentes, pigmentos, medicamentos e industriais. Além disso, estuda minerais e processos geológicos, ajudando a compreender e preservar o meio ambiente, bem como a criar soluções para problemas globais, como a poluição e as propostas para um mundo mais sustentável.'
        },
        {
            numero: 3,
            icones:'../../assets/images/Inorganic3.png',
            texto: 'Nessa área da Química apresentamos cinco testes que englobam as tendências dos conteúdos para o Ensino Médio e exercícios dos Vestibulares do Estado de São Paulo. Os testes para esse bloco são: ácidos, bases, sais, óxidos e reações inorgânicas.'
        }
    ]

    const testesFisicoQuimica: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Soluções',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 23
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Diluição e misturas de soluções',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 24
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Termoquímica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 25
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Cinética Química',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 26
    },
    {
        id: '3ac68asdac605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Equilíbrio Químico',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 27
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-f5bd91a63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Equilíbrio Iônico',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 28
    },
    {
        id: 'ac6afc-c605-48d3-a4f8-çbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'pH e pOH',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 29
    },
    {
        id: '3ac68afc-chjs-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Equilíbrio Heterogêneo',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 30
    },
    {
        id: '7ac68afc-c605-4vv4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Processos de Óxido-redução',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 31
    },
    {
        id: '3ac68afc-7sdf5-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Pilhas (Celas Galvânicas)',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 32
    },
    {
        id: '3ac68afc-c605-48895-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Eletrólise (Celas eletrolíticas)',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 33
    }]

    const informacoesFisicoQuimica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/fisquim1.png',
            texto: 'A Físico-Química é a área da Química que combina princípios da física e da química para estudar as especificações que envolvem a matéria e a energia. Ela abrange temas como termodinâmica, cinética química, equilíbrio químico e eletroquímico, buscando explicar como as reações químicas ocorrem e como as propriedades da matéria se relacionam com suas transformações.'
        },
        {
            numero: 2,
            icones: '../../assets/images/fisquim2.png',
            texto: 'A Físico-Química é essencial para entender e prever o comportamento das substâncias em diferentes condições. Seus princípios são amplamente aplicados na indústria, desde o desenvolvimento de novos materiais e medicamentos até a otimização de processos energéticos. Além disso, fornece ferramentas teóricas e práticas para áreas como nanotecnologia, engenharia química e estudos ambientais, contribuindo para avanços científicos e tecnológicos.'
        },
        {
            numero: 3,
            icones: '../../assets/images/fisquim3.png',
            texto: 'Nessa área da Química apresentamos onze testes que englobam as tendências dos conteúdos para o Ensino Médio e exercícios dos Vestibulares do Estado de São Paulo. Os testes para esse bloco são: soluções, operações com soluções, termoquímica, cinética química, equilíbrio químico, equilíbrio iônico, pH e pOH, equilíbrio heterogêneo, processos de óxido-redução, pilhas (celas galvânicas) e eletrólise (celas eletrolíticas).'
        }
    ]

    const testesOrganica: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Cadeias Carbônicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 34
    },
    {
        id: '3ac6ds-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Hidrocarbonetos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 35
    },
    {
        id: '3ac68afc-c5-48d38958-fbd91aa97f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Funções Oxigenadas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 36
    },
    {
        id: '3ac68afc-frhm-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Funções Nitrogenadas e Halogenadas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 37
    },
    {
        id: '3ac68afc-c605-48d3tyd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Propriedades Físicas dos Compostos Orgânicos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 38
    },{
        id: '3ac68afc-c605-48d3-a47jfnfbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Isomeria Constitucional (plana)',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 39
    },{
        id: '3a35rth6fc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Isomeria Espacial (geométrica e óptica)',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 40
    },{
        id: '3ac68afcgfd63-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Reações de Substituição e Adição',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 41
    },{
        id: '3erttyc605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Reações de Eliminação',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 42
    },{
        id: '3ac68afc09-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Reações de Oxido-redução ',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 43
    },{
        id: '3ac68afc-c605-48d3-a467fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Polímeros e reações de polimerização',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 44
    },{
        id: '3ac68af7505-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Bioquímica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 45
    }]

    const informacoesOrganica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/organic1.png',
            texto: 'A Química Orgânica é a área da Química que estuda os compostos formados principalmente por carbono, geralmente em combinação com hidrogênio, oxigênio, nitrogênio e outros elementos. Esses compostos incluem desde moléculas simples, como o metano, até estruturas complexas, como proteínas e DNA. A Química Orgânica investiga suas propriedades, reações e aplicações em diferentes contextos, desde o biológico até o desenvolvimento de materiais complexos. '
        },
        {
            numero: 2,
            icones: '../../assets/images/organic2.png',
            texto: 'A Química Orgânica é fundamental para a vida e a tecnologia, sendo uma base de áreas como biologia, medicina, agricultura e indústria. Ela permite a criação de medicamentos, plásticos, combustíveis e materiais avançados, além de explicar processos necessários como a respiração celular e a fotossíntese. Seu estudo é essencial para desenvolver soluções inovadoras e sustentáveis que atendam as demandas contemporâneas de uma país.'
        },
        {
            numero: 3,
            icones: '../../assets/images/organic3.png',
            texto: 'Nessa área da Química apresentamos treze testes que englobam as tendências dos conteúdos para o Ensino Médio e exercícios dos Vestibulares do Estado de São Paulo. Os testes para esse bloco são: cadeias carbônicas, hidrocarbonetos, funções oxigenadas, funções nitrogenadas e halogenadas, propriedades físicas dos compostos orgânicos, isomeria constitucional (plana), isomeria espacial geométrica, isomeria espacial óptica, reações de substituição e adição, reações de eliminação, reações de oxido-redução, polímeros e reações de polimerização e bioquímica.'
        }
    ]

    return(
        <ThemeProvider theme={theme}>
        <Container>
            <Image style={{height: 70, width: 210}} source={require('../../assets/images/Logo.png')}/>

            <View style={{flexDirection: 'row', gap: 10 }}> 

            <Link href='/(Inicial)' asChild>
                <TouchableOpacity>
                <Title> Home </Title>   
                </TouchableOpacity> 
            </Link>

            <Link href={{
                pathname: '/(ZAtomistica)',
                params: {
                    sobre: 'Atomistica',
                    informacoes: JSON.stringify(informacoesAtomistica),
                    testes: JSON.stringify(testesAtomistica)
                }}} asChild>
                <TouchableOpacity>
                <Title>Atomística</Title>
                </TouchableOpacity>
            </Link>

            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Química Geral',
                     informacoes: JSON.stringify(informacoesQuimicaGeral),
                     testes: JSON.stringify(testesQuimicaGeral)
                }}} asChild>
                <TouchableOpacity>
                <Title> Química Geral </Title>
                </TouchableOpacity>
            </Link>

            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Química Inorgânica',
                     informacoes: JSON.stringify(informacoesInorganica),
                     testes: JSON.stringify(testesInorganica)
                }}} asChild>
                <TouchableOpacity>
                <Title> Inorgânica </Title>
                </TouchableOpacity>
            </Link>
          
            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Físico-Química',
                     informacoes: JSON.stringify(informacoesFisicoQuimica),
                     testes: JSON.stringify(testesFisicoQuimica)
                }}} asChild>
                <TouchableOpacity>
                <Title> Físico-Química </Title>
                </TouchableOpacity>
            </Link>

            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Química Orgânica',
                     informacoes: JSON.stringify(informacoesOrganica),
                     testes: JSON.stringify(testesOrganica)
                }}} asChild>
                <TouchableOpacity>
                <Title> Orgânica </Title>
                </TouchableOpacity>
            </Link>

            </View> 
            <Link href='/(login)'>
            
            {/*Icon de Conta */}
             <Icon
                name='school'
                type='material'
                color='#fff'
                size={40}
            />
                 
            </Link> 

        </Container>   
       
        </ThemeProvider> )
}

const Container = styled.View`
    height: 8rem;
    flex-direction: row;    
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    background-color: ${({theme}) => theme.COLORS.BLUE_700};
`

const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-style: italic;
    margin-left:8px;
    
`