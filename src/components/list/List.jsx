import { Card, Col, Divider, Typography } from "antd";

const List = ({ result }) => {
  const { Text } = Typography

  console.log("rteioasd: ", result);
  let i = 1
  const groupFormated = result.map((group) => {
    return (
      <Col style={{ padding: 10 }}>
        <Card
          size="small"
          title={`Grupo ${i++}`}
        >
          {group.map((linha) => {
            return (
              <p>
                {linha.map(number => {
                  return (
                    <>
                      <Text style={{ fontSize: '18px' }}> {number} </Text>
                      <Divider type="vertical" />
                    </>
                  )
                })}
              </p>
            )
          })}
        </Card>
      </Col>
    )
  })

  return groupFormated
};

export default List;
