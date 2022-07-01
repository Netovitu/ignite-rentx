import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details, 
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About
} from './styles';

export function CarDetails(){
  return (
    <Container>
      <Header>
        <BackButton 
          onPress={() => { } } 
          color={''}
        />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={['https://w7.pngwing.com/pngs/787/25/png-transparent-lightning-mcqueen-lightning-mcqueen-cars-wikia-toy-pixar-cars-3-game-car-transport-thumbnail.png']}/>
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <About>
          Este é uma automóvel desportivo. Surgio o lendário touro de lide indultado,
          na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
 }