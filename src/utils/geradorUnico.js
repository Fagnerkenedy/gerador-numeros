const gerador = (fields) => {
        const casas = fields.casasDecimais || 1;
        const totalPossivel = Math.round((fields.maxima - fields.minima) * Math.pow(10, casas)) + 1;
        if (fields.quantidade > totalPossivel) {
            throw new Error(`Não é possível gerar ${fields.quantidade} valores únicos nesse intervalo. Máximo permitido: ${totalPossivel}`);
        }
        const results = [];
        for (let i = 0; i < fields.quantidade; i++) {
            let num;
            do {
                num = Math.random() * (fields.maxima - fields.minima) + fields.minima;
                num = num.toFixed(casas);
            } while (results.includes(num));
            results.push(num);
        }
        return results;
}

export default gerador