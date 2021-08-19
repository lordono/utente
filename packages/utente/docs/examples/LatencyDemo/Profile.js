import { Card } from "@lieinapril/utente-card";
import { Space } from "@lieinapril/utente-space";
import { Text } from "@lieinapril/utente-text";
import React from "react";
import { StatCard } from "./StatCard";
import styles from "./styles.css";

const randomize = max => {
  return Math.ceil(Math.random() * max);
};

export const Profile = props => {
  return (
    <Card
      variant="shadow"
      style={{ width: "100%", height: 165 }}
      contentStyle={{ height: "100%", width: "100%" }}
      padded={false}
    >
      <Space
        direction="vertical"
        size={5}
        align="start"
        full
        justify="center"
        px={10}
        py={10}
      >
        <Space>
          <Text className={styles.profiletitle}>{props.src}</Text>
          <Text className={styles.profiletitle}>
            <i className="fas fa-long-arrow-alt-right"></i>
          </Text>
          <Text className={styles.profiletitle}>{props.dst}</Text>
        </Space>
        <Space size={10}>
          <StatCard
            stats={randomize(100)}
            plus={`+${randomize(30)}`}
            minus={`-${randomize(30)}`}
            title="Ping(ms)"
            icon={<i className="fas fa-table-tennis"></i>}
          />
          <StatCard
            stats={randomize(100)}
            plus={`+${randomize(30)}`}
            minus={`-${randomize(30)}`}
            title="Jitter(ms)"
            icon={<i className="fab fa-gitter"></i>}
          />
          <StatCard
            stats={randomize(100)}
            plus={`+${randomize(30)}`}
            minus={`-${randomize(30)}`}
            title="Loss(pkt)"
            icon={<i className="fas fa-skull-crossbones"></i>}
          />
        </Space>
      </Space>
    </Card>
  );
};
