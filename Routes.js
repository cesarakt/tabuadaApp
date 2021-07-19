import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from "./Screens/Inicio";
import Tabuada from "./Screens/Tabuada";
import RespostaCerta from "./Screens/RespostaCerta";
import RespostaErrada from "./Screens/RespostaErrada";


const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={ { headerShown : false } }>
                <Stack.Screen name="Inicio" component={Inicio} />
                <Stack.Screen name="Tabuada" component={Tabuada} />
                <Stack.Screen name="RespostaCerta" component={RespostaCerta} />
                <Stack.Screen name="RespostaErrada" component={RespostaErrada} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}