const agrupador = (array, tamanhoDoGrupo) => {
    const grupos = [];
    for (let i = 0; i < array.length; i += tamanhoDoGrupo) {
        grupos.push(array.slice(i, i + tamanhoDoGrupo));
    }
    return grupos;
}

export default agrupador