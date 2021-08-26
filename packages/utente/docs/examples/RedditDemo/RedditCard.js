import React from "react";
import { Card } from "@lieinapril/utente-card";
import { Space } from "@lieinapril/utente-space";
import { Tag } from "@lieinapril/utente-tag";
import { Paragraph } from "@lieinapril/utente-text";
import { RedditVote } from "../Reddit/RedditVote";
import { RedditHeader } from "../Reddit/RedditHeader";
import { RedditFooter } from "../Reddit/RedditFooter";

import styles from "./styles.css";

export const RedditCard = props => {
  const { item } = props;

  const cardStyle = {
    width: "100%",
    height: 190,
    padding: "0 20px"
  };

  const contentStyle = {
    height: "100%",
    width: "100%"
  };

  const imgStyle = {
    width: 100,
    height: 65,
    objectFit: "cover",
    borderRadius: 5
  };

  return (
    <Space w100 style={{ maxWidth: 800, margin: "5px 20px" }}>
      <Card
        style={cardStyle}
        variant="shadow"
        padded={false}
        contentStyle={contentStyle}
      >
        <Space align="center" full size={30}>
          {/* vote */}
          <RedditVote />
          <Space direction="vertical" full py={10}>
            <RedditHeader item={item} />
            <Space full direction="vertical" align="start">
              <Space>
                <img src={item.img} style={imgStyle} alt="reddit" />
                <Paragraph className={styles.redditparagraph}>
                  {item.pitch}
                </Paragraph>
              </Space>
              <Space>
                {item.tags.map(i => (
                  <Tag key={i} size="small">
                    {i}
                  </Tag>
                ))}
              </Space>
              <RedditFooter
                item={item}
                comments="10k"
                onBtnClick={i =>
                  window.open("?path=/story/web--reddit-comment-demo")
                }
              />
            </Space>
          </Space>
        </Space>
      </Card>
    </Space>
  );
};
