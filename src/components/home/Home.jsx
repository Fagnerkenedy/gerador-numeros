import { Button, Col, Form, Grid, Input, InputNumber, Layout, Select, Typography } from "antd"
import { useState } from "react";
import gerador from "../../utils/gerador";
import List from "../list/List";
import agrupador from "../../utils/agrupador";
const { useBreakpoint } = Grid;

const Home = () => {
    const [result, setResult] = useState([])
    const screens = useBreakpoint();
    const { Option } = Select;
    const { Title } = Typography

    const finish = (fields) => {
        console.log("fields", fields);
        const numbers = gerador(fields)    
        const grupos = agrupador(numbers, fields.agruparPor || 20)
        const linhasAgrupadas = grupos.map((grupo) => {
            return agrupador(grupo, fields.numerosPorLinha || 5)
        })
        setResult(linhasAgrupadas)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Col style={{ padding: 15}}>
                <Title style={{ margin: 10 }} level={3}>Gerador de números aleatórios</Title>
                <Form
                    labelCol={
                        screens.xs
                            ? undefined
                            : { flex: '150px' }
                    }
                    labelAlign="right"
                    labelWrap
                    wrapperCol={
                        screens.xs
                            ? undefined
                            : { flex: 1 }
                    }
                    colon={false}
                    layout={screens.xs ? 'vertical' : 'horizontal'}
                    onFinish={finish}
                >
                    {/* ------------------------------------------------------- */}
                    <Form.Item
                        label={<span>Temperatura Mínima</span>}
                        name={'minima'}
                        rules={[
                            {
                                required: true,
                                message: 'Este campo é obrigatório',
                            },
                        ]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            changeOnWheel
                        />
                    </Form.Item>
                    {/* ------------------------------------------------------- */}
                    <Form.Item
                        label={<span>Temperatura Máxima</span>}
                        name={'maxima'}
                        rules={[
                            {
                                required: true,
                                message: 'Este campo é obrigatório',
                            },
                        ]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            changeOnWheel
                        />
                    </Form.Item>
                    {/* ------------------------------------------------------- */}
                    <Form.Item
                        label={<span>Quantidade de números</span>}
                        name={'quantidade'}
                        rules={[
                            {
                                required: true,
                                message: 'Este campo é obrigatório',
                            },
                        ]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            changeOnWheel
                        />
                    </Form.Item>
                    {/* ------------------------------------------------------- */}
                    <Form.Item
                        label={<span>Casas decimais</span>}
                        name={'casasDecimais'}
                        initialValue={0}
                    >
                        <Select
                            allowClear
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            defaultValue={0}
                        >
                            <Option value={0}>-Nenhuma-</Option>
                            <Option value={1}>1</Option>
                            <Option value={2}>2</Option>
                            <Option value={3}>3</Option>
                            <Option value={4}>4</Option>
                            <Option value={5}>5</Option>
                        </Select>
                    </Form.Item>
                    {/* ------------------------------------------------------- */}
                    <Form.Item
                        label={<span>Agrupar Por</span>}
                        name={'agruparPor'}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            placeholder="Padrão: 20"
                        />
                    </Form.Item>
                    {/* ------------------------------------------------------- */}
                    <Form.Item
                        label={<span>Números por linha</span>}
                        name={'numerosPorLinha'}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            placeholder="Padrão: 5"
                        />
                    </Form.Item>
                    {/* ------------------------------------------------------- */}
                    <Button style={{ width: '100%' }} type="primary" htmlType="submit">Gerar</Button>
                </Form>
            </Col>
            <List result={result}></List>
        </Layout>
    )
}

export default Home