import React from "react";
import { Space, Theme, Title, Paragraph } from "../../../lib/utente";
import { RedditNav } from "../Reddit/RedditNav";
import { redditData } from "../Reddit/data";
import styles from "./styles.css";

const contentStyle = {
  overflowY: "auto",
  padding: "0 20px",
  height: "100%",
  fontSize: "0.9rem"
};

export const RedditPageDemo = () => {
  const item = redditData[0];

  return (
    <Space style={{ backgroundColor: "#2c2f33" }} full>
      <Theme color="#2c2f33" secondaryColor="#ffe58f">
        <Space
          justify="start"
          align="center"
          direction="vertical"
          colored
          className={styles.redditlayout}
        >
          <RedditNav />
          <Space
            direction="vertical"
            style={contentStyle}
            align="start"
            justify="start"
            px={50}
            full
          >
            <Title lvl={2}>Idea: {item.title}</Title>

            <Title lvl={3}>Pitch</Title>
            <Paragraph>{item.pitch}</Paragraph>
            <Title lvl={3}>Problem</Title>
            <Paragraph>{item.problem}</Paragraph>
            <Title lvl={3}>Solution</Title>
            <Paragraph>{item.solution}</Paragraph>
            <Title lvl={3}>Market</Title>
            <Paragraph>{item.market}</Paragraph>
          </Space>
        </Space>
      </Theme>
    </Space>
  );
};

RedditPageDemo.parameters = {};
