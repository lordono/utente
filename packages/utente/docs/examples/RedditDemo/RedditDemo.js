import React from "react";
import { Button, Space, Theme, Input } from "../../../lib/utente";
import { RedditCard } from "./RedditCard";
import { redditData } from "./data";
import styles from "./styles.css";
import { RedditGroup } from "./RedditGroup";
import { RedditModal } from "./RedditModal";

const Logo = () => (
  <Space
    justify="center"
    align="center"
    style={{
      height: 40,
      width: 80,
      backgroundColor: "#595959",
      color: "white"
    }}
  >
    Logo
  </Space>
);

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
          {/* header */}
          <Space
            justify="space-between"
            align="center"
            colored
            w100
            px={20}
            py={5}
            className={styles.redditheader}
          >
            <Logo />
            <Input
              placeholder="Search Bold Bets"
              style={{ width: 300 }}
              size="small"
              prefix={<i className="fas fa-search"></i>}
              onChange={() => null}
            />
            <Space>
              <Button size="small" variant="border">
                Login
              </Button>
            </Space>
          </Space>

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
