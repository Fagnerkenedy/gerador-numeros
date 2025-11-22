import { Affix, Card, Col, Divider, FloatButton, Grid, Layout, Row, Typography } from "antd"
import { useState } from "react";
import gerador from "../../utils/gerador";
import geradorUnico from "../../utils/geradorUnico";
import List from "../list/List";
import agrupador from "../../utils/agrupador";
import Formulario from "../form/Formulario"
import notify from "../../utils/notification";
import { CaretUpOutlined } from "@ant-design/icons";
const { useBreakpoint } = Grid;

const Home = () => {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const { Title, Text } = Typography
    const screens = useBreakpoint();

    const finish = (fields) => {
        try {
            setLoading(true)
            let numbers
            if (fields.duplicados) {
                numbers = gerador(fields)
            } else {
                numbers = geradorUnico(fields)
            }
            const grupos = agrupador(numbers, fields.agruparPor || 20)
            const linhasAgrupadas = grupos.map((grupo) => {
                return agrupador(grupo, fields.numerosPorLinha || 5)
            })
            setResult(linhasAgrupadas)
            setTimeout(() => {
                setLoading(false)
                setTitle(`${fields.categoria} ${fields.minima}° até ${fields.maxima}°`)
            }, 200)
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
            setLoading(false)
            setResult([])
        }
    }

    return (
        <Layout style={{ padding: 15, minHeight: '100vh' }}>
            <Row>

                <Card
                    style={{
                        minWidth:
                            screens.xs ? '100%' : 400,
                        minHeight:
                            screens.xs ? '100vh' : ''
                    }}
                >
                    <Title style={{ margin: 10 }} level={3}>Gerador de números aleatórios</Title>
                    <Formulario finish={finish} />
                </Card>
                {screens.xs ? <Divider /> : null}
                <div id="scrollableDiv" />
                <Col
                    style={{
                        minWidth:
                            screens.xs ? '100%' : 400,
                        minHeight:
                            screens.xs ? 1000 : ''
                    }}
                >
                    <Affix offsetTop={screens.xs ? 50 : 20}>
                        {result.length !== 0 && (
                            <Card
                                size="small"
                                style={{ backgroundColor: "#d3d3d3ff" }}
                            >
                                <Text strong>{title}</Text>
                            </Card>
                        )}
                    </Affix>
                    <Col style={{ marginTop: 10 }}>
                        <List result={result} loading={loading} />
                    </Col>
                </Col>
            </Row>
            <FloatButton.BackTop icon={<CaretUpOutlined />} style={{ width: 85, height: 85 }} />
        </Layout>
    )
}

export default Home