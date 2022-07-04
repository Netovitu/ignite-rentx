import React from 'react';
import  { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from './styles';

export function Home(){

  const navigation = useNavigation();

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thunbnail: 'https://w7.pngwing.com/pngs/787/25/png-transparent-lightning-mcqueen-lightning-mcqueen-cars-wikia-toy-pixar-cars-3-game-car-transport-thumbnail.png'
  }
  
  function handleCarDetails(){
    navigation.navigate('CarDetails');
  }
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1,2,3,4,5,6]}
        renderItem={({ item }) => 
          <Car data={carData} onPress={handleCarDetails}/>
        }
      />
      
    </Container>
  );
 }