import React from 'react';
import { Text, ImageBackground, View, Button } from 'react-native';

import trofeu from '../../assets/trofeu.jpg';
import style from './style';

const RespostaCerta = ({ navigation }) => {
    const voltar = () => {
        navigation.goBack();
    }
    return (
        <ImageBackground source={trofeu} style={style.fundo} resizeMode="contain">
            <Text style={style.texto}>Parabéns, você acertou!</Text>

            <View style={style.boxBotaoTabuada}>
                <Button title="Responder outro" onPress={voltar} color="#a0df52" />
            </View>
        </ImageBackground>
    )
}

export default RespostaCerta;