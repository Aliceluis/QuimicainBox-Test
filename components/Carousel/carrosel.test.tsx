import React from 'react';
import { render } from '@testing-library/react-native';
import IndividualIntervalsExample from '../Carousel/index'; 
import 'jest-styled-components';


describe('IndividualIntervalsExample', () => {
  
  test('should render correctly', () => {
   
    const { getByTestId } = render(<IndividualIntervalsExample />);
    

    const carousel = getByTestId('carousel');
    expect(carousel).toBeTruthy();
  });
  
  test('should have 6 carousel items', () => {
    const { getAllByTestId } = render(<IndividualIntervalsExample />);
    const carouselItems = getAllByTestId('carousel-item');
    expect(carouselItems.length).toBe(6);
  });

  test('should apply correct styles to carousel', () => {
    
    const { getByTestId } = render(<IndividualIntervalsExample />);
    const carousel = getByTestId('carousel');
    
   
    expect(carousel).toHaveStyle({ width: 1550, height: 500 });
  });

  test('should load images correctly', () => {

    const { getAllByTestId } = render(<IndividualIntervalsExample />);
    
   
    const images = getAllByTestId('banner-image');
    expect(images.length).toBe(6);
  });

  test('should match snapshot', () => {

    const { toJSON } = render(<IndividualIntervalsExample />);
    expect(toJSON()).toMatchSnapshot();
  });

});
