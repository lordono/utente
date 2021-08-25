import React from "react";
import { Steps, Step } from "@lieinapril/utente-steps";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";
import { Title, Paragraph } from "@lieinapril/utente-text";
import { Layout, Header, Content } from "@lieinapril/utente-layout";
import { RedditNav } from "../Reddit/RedditNav";
import { RedditVote } from "../Reddit/RedditVote";
import { redditData } from "../Reddit/data";
import styles from "./styles.css";
import { Card } from "@lieinapril/utente-card";
import { RedditHeader } from "../Reddit/RedditHeader";

const contentStyle = {
  overflowY: "auto",
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
          <Layout>
            <Header>
              <RedditNav />
            </Header>
            <Content>
              <Space
                direction="vertical"
                style={contentStyle}
                align="start"
                justify="start"
                px={50}
                full
              >
                <Space size={40}>
                  <Space direction="vertical" align="start">
                    <Space size={20}>
                      <RedditVote direction="horizontal" />
                      <Title lvl={1}>Idea: {item.title}</Title>
                    </Space>
                    <img
                      src={item.img}
                      className={styles.redditimage}
                      alt="cover"
                    />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Title lvl={2}>Pitch</Title>
                    <Paragraph>{item.pitch}</Paragraph>
                  </Space>
                </Space>
                <Space colored style={{ padding: 20 }} w100>
                  <Steps variant="fill" current={2} size={32}>
                    <Step title="Ideate" />
                    <Step title="Validate" />
                    <Step title="Scope" />
                    <Step title="Incubate" />
                  </Steps>
                </Space>
                <Space full align="start" size={20}>
                  <Card
                    variant="shadow"
                    style={{ width: "calc(100% - 320px)", height: "100%" }}
                    contentStyle={{ height: "100%" }}
                  >
                    <Space direction="vertical" align="start">
                      <Title lvl={3}>Problem</Title>
                      <Paragraph>{item.problem}</Paragraph>
                      <Title lvl={3}>Solution</Title>
                      <Paragraph>{item.solution}</Paragraph>
                      <Title lvl={3}>Market</Title>
                      <Paragraph>{item.market}</Paragraph>
                    </Space>
                  </Card>
                  <Space direction="vertical" align="start">
                    <Title lvl={3}>Comments</Title>
                    <Card style={{ width: 320 }}>
                      <RedditHeader item={item} omit />
                      <Paragraph className={styles.reddit_comments}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut vel illo praesentium incidunt nisi pariatur
                        minima in blanditiis fugit, voluptate ipsa, asperiores
                        est itaque animi laboriosam nihil sunt fugiat. Debitis!
                      </Paragraph>
                    </Card>
                    <Card style={{ width: 320 }}>
                      <RedditHeader item={item} omit />
                      <Paragraph className={styles.reddit_comments}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut vel illo praesentium incidunt nisi pariatur
                        minima in blanditiis fugit, voluptate ipsa, asperiores
                        est itaque animi laboriosam nihil sunt fugiat. Debitis!
                      </Paragraph>
                    </Card>
                  </Space>
                </Space>
              </Space>
            </Content>
          </Layout>
        </Space>
      </Theme>
    </Space>
  );
};

RedditPageDemo.parameters = {};
