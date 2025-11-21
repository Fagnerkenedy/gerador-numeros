const fields = [
    {
        label: "Categoria",
        name: "categoria",
        type: "select",
        options: [
            {
                id: 1,
                name: "Fritadeiras",
                min: 167.0,
                max: 172.0,
                qtd: 8,
                agrupado: 4
            },
            {
                id: 2,
                name: "Carnes",
                min: 4.2,
                max: 4.8,
                qtd: 48,
                agrupado: 4
            },
            {
                id: 3,
                name: "Alimentos quentes",
                min: 67,
                max: 72,
                qtd: 24,
                agrupado: 4
            },
            {
                id: 4,
                name: "Legumes",
                min: 4.5,
                max: 6.5,
                qtd: 4,
            },
            {
                id: 5,
                name: "Cenoura e alface",
                min: 9,
                max: 12,
                qtd: 8,
                agrupado: 4
            },
            {
                id: 6,
                name: "Balcão frio",
                min: 4.5,
                max: 6.0,
                qtd: 4,
            },
            {
                id: 7,
                name: "Banho maria",
                min: 87.0,
                max: 89.0,
                qtd: 4,
            },
            {
                id: 8,
                name: "Freezer",
                min: -17,
                max: -11,
                qtd: 10,
                agrupado: 2
            },
            {
                id: 9,
                name: "Geladeira H.F.",
                min: 5,
                max: 5.8,
                qtd: 2,
            },
            {
                id: 10,
                name: "Geladeira Carnes",
                min: 4,
                max: 4.8,
                qtd: 2,
            },
        ],
        required: true,
        initialValue: "Carnes"
    },
    {
        label: "Temperatura Inicial",
        name: "minima",
        type: "number",
        required: true,
        initialValue: 70
    },
    {
        label: "Temperatura Final",
        name: "maxima",
        type: "number",
        required: true,
        initialValue: 90
    },
    {
        label: "Quantidade",
        name: "quantidade",
        type: "number",
        required: true,
        initialValue: 40
    },
    {
        label: "Casas decimais",
        name: "casasDecimais",
        placeholder: "Padrão: 1",
        type: "number",
        min: 0,
        max: 20,
    },
    {
        label: "Agrupar Por",
        name: "agruparPor",
        type: "number",
        placeholder: "Padrão: 20",
    },
    {
        label: "Números por linha",
        name: "numerosPorLinha",
        placeholder: "Padrão: 5",
        type: "number",
    },
    {
        label: "Permitir duplicados",
        name: "duplicados",
        type: "switch",
        initialValue: true
    }
]


export default fields