export const gerarNumero = () => {
    const isInterval = "closed";
    const setIsInterval = isInterval === "closed" ? 1 : 0;
    const max = 10;
    const min = 1;
    const offset = min;
    const lenght = (max + (setIsInterval) - min)

    return Math.floor(Math.random() * (lenght) + (offset));
}

export const validarResposta = (numero1, numero2, respostaUsuario) => {
    const respostaCerta = numero1 * numero2;
    if (respostaUsuario == respostaCerta) {
        return true;
    } else {
        return false;
    }
}
