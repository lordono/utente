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
  const { item, onBtnModal } = props;

  const cardStyle = {
    width: "calc(100% - 40px)",
    height: 190,
    padding: "0 20px"
  };

  const contentStyle = {
    height: "100%",
    width: "100%"
  };

  return (
    <Space w100 style={{ maxWidth: 800, margin: 20 }}>
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
              <Paragraph className={styles.redditparagraph}>
                {item.pitch}
              </Paragraph>
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
                onBtnModal={onBtnModal}
              />
            </Space>
          </Space>
        </Space>
      </Card>
    </Space>
  );
};
