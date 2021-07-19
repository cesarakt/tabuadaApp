import React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';

import errou from '../../assets/errou.jpg';
import style from './style';

const RespostaErrada = ({ navigation }) => {
    const abrirTelaTabuada = () => {
        navigation.navigate('Tabuada');
    }

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <ImageBackground source={errou} style={style.fundo} resizeMode="cover">
            <View style={style.boxConteudo}>
                <Text style={style.texto}>
                    Ops! Resposta errada que tal ver a tabuada?
                </Text>

                <View style={style.boxBotoes}>
                    <View style={style.boxBotao}>
                        <Button title="Ver tabuada" onPress={abrirTelaTabuada} color="#1f4f66" />
                    </View>

                    <View style={style.boxBotao}>
                        <Button title="Tentar outro" onPress={voltar} color="#a0df52" />
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default RespostaErrada;