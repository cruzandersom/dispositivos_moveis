import React from "react";
import {StatusBar, SafeAreaView, Text, View} from 'react-native';


// expo install expo-font @expo-google-fonts/montserrat
// importação de fontes externas
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';


import Cesta from "./src/telas/Cesta";

export default function App() {

    /* Uma variavel vai receber um objeto contendo o mapa de fontes
    * nele iremos dar um nome para duas fontes e em seguida iremos
    *
    * */
    let [fontsLoaded] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold" : Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
      <SafeAreaView>
              <Cesta />
      </SafeAreaView>

  );
};
