const fields = [
    {
        label: "Categoria",
        name: "categoria",
        type: "select",
        options: [
            {
                id: 1,
                name: "Carnes",
                min: 70,
                max: 90,
                qtd: 60
            },
            {
                id: 2,
                name: "Frios",
                min: -17,
                max: 15,
                qtd: 70
            },
            {
                id: 3,
                name: "Outros",
                min: 100,
                max: 120,
                qtd: 120
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