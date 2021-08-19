import React from "react";
import { Button } from "@lieinapril/utente-button";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

import { RedditCard } from "./RedditCard";
import { RedditGroup } from "./RedditGroup";
import { RedditModal } from "./RedditModal";
import { redditData } from "../Reddit/data";
import styles from "./styles.css";
import { RedditNav } from "../Reddit/RedditNav";

export const RedditDemo = () => {
  const [selectedItem, setSelectedItem] = React.useState(redditData[0]);
  const [showModal, setShowModal] = React.useState(false);

  const onBtnModal = item => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <Space style={{ backgroundColor: "#2c2f33" }} w100>
      <Theme color="#2c2f33" secondaryColor="#ffe58f">
        <Space
          justify="start"
          align="center"
          direction="vertical"
          colored
          className={styles.redditlayout}
        >
          <RedditNav />
          {/* content */}
          <Space align="start">
            <Space
              justify="start"
              align="center"
              direction="vertical"
              style={{ marginTop: 76 }}
            >
              <RedditGroup />
            </Space>
            <Space justify="start" align="center" direction="vertical">
              <Space w100 style={{ maxWidth: 800 }} justify="end">
                <Button variant="shadow" size="small">
                  <Space>
                    <i className="fas fa-stream"></i>
                    View
                  </Space>
                </Button>
              </Space>
              {redditData.map(reddit => {
                return (
                  <RedditCard
                    key={reddit.index}
                    item={reddit}
                    onBtnModal={onBtnModal}
                  />
                );
              })}
            </Space>
          </Space>
        </Space>
        <RedditModal
          item={selectedItem}
          isVisible={showModal}
          onCancel={() => setShowModal(false)}
        />
      </Theme>
    </Space>
  );
};

RedditDemo.parameters = {};
