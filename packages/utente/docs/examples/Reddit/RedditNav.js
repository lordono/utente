import React from "react";
import { Logo } from "./Logo";
import { Input } from "@lieinapril/utente-input";
import { Space } from "@lieinapril/utente-space";
import { Button } from "@lieinapril/utente-button";
import styles from "./styles.css";

export const RedditNav = () => (
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
);
