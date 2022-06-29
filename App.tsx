//import { StatusBar } from 'expo-status-bar';
import React from 'react';

//import * as SplashScreen from 'expo-splash-screen';
//import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components';

//import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
//import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';


import { Home } from './src/screens/Home';
import theme from './src/screens/styles/theme';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

