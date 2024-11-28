import Carousel from 'react-bootstrap/Carousel';
import theme from "@/theme"; 
import styled, { ThemeProvider } from "styled-components/native";
import { Text, Image } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'expo-router';

function IndividualIntervalsExample() {
  return (
    <ThemeProvider theme={theme}>
    <Carousel style={{width: 1550, height: 500}}>
      <Carousel.Item interval={6000}>
        <Banner source={require('../../assets/images/Banners/Banner.png')} />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Banner source={require('../../assets/images/Banners/Atomistica.png')}/>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
      < Banner source={require('../../assets/images/Banners/Quimicageral.png')}/>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Banner source={require('../../assets/images/Banners/Inorganica.png')} />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Banner source={require('../../assets/images/Banners/Fisicoquimica.png')} />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Banner source={require('../../assets/images/Banners/Organica.png')} />
      </Carousel.Item>
    </Carousel>
    </ThemeProvider>
  );
}
export default IndividualIntervalsExample;


const Banner = styled.Image`
  height: 450;
  width: 100%;

`



