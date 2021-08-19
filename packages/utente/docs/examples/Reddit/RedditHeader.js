import React from "react";
import { Space } from "@lieinapril/utente-space";
import { Avatar } from "@lieinapril/utente-avatar";
import { Text } from "@lieinapril/utente-text";
import { formatDistance } from "date-fns";
import styles from "./styles.css";

const currentDate = new Date();

const titleStyle = { fontSize: 12 };
const dateStyle = { fontSize: 11, color: "#cfcfcf" };

export const RedditHeader = props => (
  <Space align="center" w100>
    <Avatar
      variant="shadow"
      shape="circle"
      src={props.item.avatar}
      style={{ width: 20, height: 20 }}
    />
    <Text style={titleStyle} strong>
      {props.item.title}
    </Text>
    <Text style={dateStyle}>
      Posted by {props.item.name} {formatDistance(props.item.date, currentDate)}{" "}
      ago
    </Text>
  </Space>
);
