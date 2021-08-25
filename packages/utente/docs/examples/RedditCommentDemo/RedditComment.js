import React from "react";
import cx from "clsx";

import { Card } from "@lieinapril/utente-card";
import { Space } from "@lieinapril/utente-space";
import { Paragraph } from "@lieinapril/utente-text";
import { RedditVote } from "../Reddit/RedditVote";
import { RedditCommentHeader } from "./RedditCommentHeader";
import { RedditCommentFooter } from "./RedditCommentFooter";

import styles from "./styles.css";

export const RedditComment = ({ item, alt = false }) => {
  const [hide, setHide] = React.useState(false);
  const cardStyle = {
    width: "100%",
    padding: "0 10px"
  };

  const contentStyle = {
    height: "100%",
    width: "100%"
  };

  const nestedComments = (item.comments || []).map(nestedItem => {
    return (
      <RedditComment item={nestedItem} key={nestedItem.index} alt={!alt} />
    );
  });

  const classes = cx(hide && styles.reddit_comment_hide);

  return (
    <Card
      className={classes}
      style={cardStyle}
      variant="border"
      padded={false}
      contentStyle={contentStyle}
    >
      <Space align="start" full size={10} py={10}>
        {!hide && <RedditVote />}
        <Space direction="vertical" full>
          <RedditCommentHeader item={item} hide={hide} setHide={setHide} />
          <Space full direction="vertical" align="start">
            <Paragraph className={styles.redditparagraph}>
              {item.text}
            </Paragraph>
            <RedditCommentFooter />
            {nestedComments}
          </Space>
        </Space>
      </Space>
    </Card>
  );
};
