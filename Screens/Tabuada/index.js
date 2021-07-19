import React from 'react';
import { ImageBackground, View, Button } from 'react-native';

import style from './style';
import tabuada from '../../assets/tabuada.jpeg';

const Tabuada = ({navigation}) => {
    const voltar = () => {
        navigation.navigate("Inicio");
    }

    return (
        <ImageBackground source={tabuada} style={style.fundo} resizeMode="contain">
            <View style={style.boxBotaoTabuada}>
                <Button title="Responder" onPress={voltar} color="#a0df52" />
            </View>
        </ImageBackground>
    )
}

export default Tabuada;