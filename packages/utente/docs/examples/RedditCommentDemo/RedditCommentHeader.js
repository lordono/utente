import React from "react";
import { Space } from "@lieinapril/utente-space";
import { Avatar } from "@lieinapril/utente-avatar";
import { Text } from "@lieinapril/utente-text";
import { formatDistance } from "date-fns";
import { Button } from "@lieinapril/utente-button";

const currentDate = new Date();

const dateStyle = { fontSize: 11, color: "#cfcfcf" };

export const RedditCommentHeader = props => (
  <Space align="center" w100>
    <Button
      onClick={() => props.setHide(e => !e)}
      style={{ width: 20, height: 20, padding: 0 }}
    >
      <i className={`fas fa-${props.hide ? "plus" : "minus"}-square`} />
    </Button>
    <Avatar
      variant="shadow"
      shape="circle"
      src={props.item.avatar}
      style={{ width: 20, height: 20 }}
    />
    <Text style={dateStyle}>
      Posted by {props.item.name} {formatDistance(props.item.date, currentDate)}{" "}
      ago
    </Text>
  </Space>
);
