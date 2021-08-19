import React from "react";
import { Space, Text } from "../../../lib/utente";
import styles from "./styles.css";

const ArrowIcon = props => (
  <div className={styles.arrowButton}>
    <i className={`fas fa-arrow-alt-circle-${props.icon}`}></i>
  </div>
);

export const RedditVote = props => (
  <Space
    direction={props.direction === "horizontal" ? "horizontal" : "vertical"}
    justify="center"
  >
    <ArrowIcon icon="up" />
    <Text style={{ fontSize: 12 }}>10k</Text>
    <ArrowIcon icon="down" />
  </Space>
);
