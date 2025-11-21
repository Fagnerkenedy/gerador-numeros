import { Col, Layout, Typography } from "antd"
import { useState } from "react";
import gerador from "../../utils/gerador";
import geradorUnico from "../../utils/geradorUnico";
import List from "../list/List";
import agrupador from "../../utils/agrupador";
import Formulario from "../form/Formulario"
import notify from "../../utils/notification";

const Home = () => {
    const [result, setResult] = useState([])
    const { Title } = Typography

    const finish = (fields) => {
        try {
            console.log("fields", fields);

            let numbers
            if (fields.duplicados) {
                numbers = gerador(fields)
            } else {
                numbers = geradorUnico(fields)
            }
            // if (numbers.type && numbers.type == "valores_unicos") {

            // }

            const grupos = agrupador(numbers, fields.agruparPor || 20)
            const linhasAgrupadas = grupos.map((grupo) => {
                return agrupador(grupo, fields.numerosPorLinha || 5)
            })
            setResult(linhasAgrupadas)
        } catch (error) {
            console.log("Erro ao gerar números: ", error)
            notify({
                message: "Erro ao gerar números",
                description: error.message,
                placement: 'top',
                type: 'error',
                duration: 10,
                width: 600,
                pauseOnHover: true
            })
        }
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Col style={{ padding: 15 }}>
                <Title style={{ margin: 10 }} level={3}>Gerador de números aleatórios</Title>
                <Formulario finish={finish} />
            </Col>
            <List result={result}></List>
        </Layout>
    )
}

export default Home