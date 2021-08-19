import React from "react";
import { Space } from "@lieinapril/utente-space";
import { Button } from "@lieinapril/utente-button";

const footerBtnStyle = {
  height: 32,
  padding: 10,
  fontSize: 12,
  whiteSpace: "nowrap"
};

export const RedditFooter = props => {
  const { comments, item, onBtnModal } = props;
  return (
    <Space align="center" justify="space-between" w100>
      <Space align="center" w100>
        <Button style={footerBtnStyle} variant="shadow">
          <Space align="center" w100>
            <i className="far fa-comment-alt"></i>
            <span>{comments}&nbsp;comments</span>
          </Space>
        </Button>
        <Button style={footerBtnStyle} variant="shadow">
          <Space align="center" w100>
            <i className="fas fa-share"></i>
            <span>Share</span>
          </Space>
        </Button>
        <Button style={footerBtnStyle} variant="shadow">
          <Space align="center" w100>
            <i className="fas fa-bookmark"></i>
            <span>Save</span>
          </Space>
        </Button>
      </Space>
      <Button
        style={footerBtnStyle}
        variant="shadow"
        onClick={() => onBtnModal(item)}
      >
        <Space align="center" w100>
          <i className="fas fa-info-circle"></i>
          <span>More Details</span>
        </Space>
      </Button>
    </Space>
  );
};
