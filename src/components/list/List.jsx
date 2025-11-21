import { Card, Divider, Skeleton, Typography } from "antd";

const List = ({ result, loading }) => {
  const { Text } = Typography
  let i = 1
  const groupFormated = result.map((group) => {
    return (
      <Card
        size="small"
        title={`Grupo ${i++}`}
        style={{ margin: 10 }}
      >
        {loading ? <Skeleton active /> :
          group.map((linha) => {
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
    )
  })

  return groupFormated
};

export default List;
