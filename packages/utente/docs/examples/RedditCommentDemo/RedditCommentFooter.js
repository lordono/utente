import React from "react";
import { Space } from "@lieinapril/utente-space";
import { Button } from "@lieinapril/utente-button";

const footerBtnStyle = {
  height: 24,
  padding: 5,
  fontSize: 10,
  whiteSpace: "nowrap"
};

export const RedditCommentFooter = props => {
  return (
    <Space align="center" justify="space-between" w100>
      <Button style={footerBtnStyle} variant="fill">
        <Space align="center" w100>
          <i className="fas fa-reply"></i>
          <span>Reply</span>
        </Space>
      </Button>
    </Space>
  );
};
