const fields = [
    {
        label: "Valor Inicial",
        name: "minima",
        type: "number",
        required: true,
    },
    {
        label: "Valor Final",
        name: "maxima",
        type: "number",
        required: true
    },
    {
        label: "Quantidade",
        name: "quantidade",
        type: "number",
        required: true
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