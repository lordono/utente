import React from "react";
import { Button } from "@lieinapril/utente-button";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";
import { Layout, Header, Content } from "@lieinapril/utente-layout";

import { RedditCard } from "./RedditCard";
import { RedditGroup } from "../Reddit/RedditGroup";
import { redditData } from "../Reddit/data";
import styles from "./styles.css";
import { RedditNav } from "../Reddit/RedditNav";

export const RedditDemo = () => {
  const [selectedItem, setSelectedItem] = React.useState(redditData[0]);

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
            <Content style={{ marginTop: 24 }}>
              <Space justify="start" align="center" direction="vertical">
                <Space w100 style={{ maxWidth: 800 }} justify="space-between">
                  <RedditGroup />
                  <Button variant="shadow" size="small">
                    <Space>
                      <i className="fas fa-stream"></i>
                      View
                    </Space>
                  </Button>
                </Space>
                {redditData.map(reddit => {
                  return <RedditCard key={reddit.index} item={reddit} />;
                })}
              </Space>
            </Content>
          </Layout>
        </Space>
      </Theme>
    </Space>
  );
};

RedditDemo.parameters = {};
