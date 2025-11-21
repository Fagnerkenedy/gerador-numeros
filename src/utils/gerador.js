const gerador = (fields) => {
    const results = []
    for (let i = 0; i < fields.quantidade; i++) {
        const num = Math.random() * (fields.maxima - fields.minima) + fields.minima;
        const formatado = num.toFixed(fields.casasDecimais || 1)
        results.push(formatado);
    }
    return results
}

export default gerador