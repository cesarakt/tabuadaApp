import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    imagemFundo: {
        width: "100%",
        height: "100%"
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    boxUsuario: {
        borderRadius: 10,
        margin: 20,
        padding: 20,
        backgroundColor: "rgba(255,255,255,0.85)",
        alignItems: "center",
        width: 320
    },
    titulo: {
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 26,
        textTransform: "uppercase",
        fontWeight: "700",
        textAlign: "center",
        color: "#1f4f66"
    },
    boxInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 3,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10,
        fontSize: 26
    },
    operacao: {
        marginRight: 10,
        fontSize: 26
    },
    boxButton: {
        width: 320,
        marginTop: 20,
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    button: {
        minWidth: 130,
        marginBottom: 10
    },
    boxButtonTabuada: {
        width: 320
    }
});

export default style;