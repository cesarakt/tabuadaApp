import React, { useState } from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { validarResposta, gerarNumero } from "./funcoes";
import fundo from "../../assets/fundo.png";
import style from "./style";

export default function Inicio({ navigation }) {
    const [primeiroNumero, setPrimeiroNumero] = useState(1);
    const [segundoNumero, setSegundoNumero] = useState(1);
    const [respostaUsuario, setRespostaUsuario] = useState(0);

    const criarQuestao = () => {
        setPrimeiroNumero(gerarNumero());
        setSegundoNumero(gerarNumero());
        setRespostaUsuario("");
    }

    const responder = () => {
        //Early return
        if (respostaUsuario == "") {
            return (
            alert ("Preencha o resultado"))
        }

        if ( validarResposta(primeiroNumero, segundoNumero, respostaUsuario)) {
            navigation.navigate("RespostaCerta")
        } else {
            navigation.navigate("RespostaErrada")
        }
        criarQuestao();
    }

    return (
        <ImageBackground source={fundo} style={style.imagemFundo} >
            <View style={style.container} >
                <View style={style.boxUsuario} >
                    <Text style={style.titulo} >Duvido você acertar!</Text>

                    <View style={style.boxInput} >
                        <Text style={style.operacao} >{primeiroNumero} x {segundoNumero} = </Text>

                        <TextInput
                            textAlign="center"
                            keyboardType="phone-pad"
                            maxLength={3}
                            autoFocus={true}
                            style={style.input}
                            value={respostaUsuario.toString()}
                            onChangeText={ setRespostaUsuario }
                        />
                    </View>
                    <View style={style.boxButton}>
                    <View style={style.button} >
                        <Button title="Pular" color="#E53B62" onPress={criarQuestao} />
                    </View>

                    <View style={style.button}>
                        <Button title="Responder" color="#A0DE55" onPress={responder} />
                    </View>
                    </View>
                </View>
                <View style={style.boxButtonTabuada} >
                    <Button title="Ver Tabuada" onPress={() => navigation.navigate("Tabuada")} color="#204E66" />
                </View>
            </View>
        </ImageBackground>
    )
}