import React from "react";
import { Card } from "@lieinapril/utente-card";
import { Space } from "@lieinapril/utente-space";
import { Text } from "@lieinapril/utente-text";
import styles from "./styles.css";

const contentStyle = {
  height: "100%",
  width: "100%"
};

export const StatCard = props => {
  return (
    <Card
      style={{ width: 100, height: 100 }}
      variant="fill"
      contentStyle={contentStyle}
      className={styles.statcard}
    >
      <Space
        direction="vertical"
        align="start"
        justify="space-between"
        full
        px={7.5}
        py={7.5}
      >
        <div className={styles.icon}>{props.icon}</div>
        <Space size={20} justify="space-between" w100>
          <Text className={styles.stat}>{props.stats}</Text>
          <Space direction="vertical" align="start" justify="center">
            <Text variant="warning" className={styles.more}>
              {props.plus}
            </Text>
            <Text variant="success" className={styles.more}>
              {props.minus}
            </Text>
          </Space>
        </Space>
        <Text className={styles.title}>{props.title}</Text>
      </Space>
    </Card>
  );
};
