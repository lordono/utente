import React from "react";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";
import { Layout, Header, Content } from "@lieinapril/utente-layout";
import { Title } from "@lieinapril/utente-text";

import styles from "./styles.css";
import { RedditCard } from "./RedditCard";
import { RedditNav } from "../Reddit/RedditNav";

import { comments, redditData } from "../Reddit/data";
import { RedditComment } from "./RedditComment";

export const RedditCommentDemo = () => {
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
          <Layout>
            <Header>
              <RedditNav />
            </Header>
            <Content>
              <Space
                align="start"
                justify="center"
                direction="vertical"
                style={{ marginTop: 12 }}
                px={20}
              >
                <RedditCard item={redditData[0]} />
                <Title lvl={3}>Comments</Title>
                <Space full size={5} direction="vertical">
                  {comments.map(comment => (
                    <RedditComment key={comment.index} item={comment} />
                  ))}
                </Space>
              </Space>
            </Content>
          </Layout>
        </Space>
      </Theme>
    </Space>
  );
};

RedditCommentDemo.parameters = {};
