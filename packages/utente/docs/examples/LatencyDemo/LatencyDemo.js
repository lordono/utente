import React from "react";
import { Space } from "@lieinapril/utente-space";
import MobileLayout from "../MobileLayout";
import { Button } from "@lieinapril/utente-button";
import { Theme } from "@lieinapril/utente-theme";
import { Profile } from "./Profile";
import { Input } from "@lieinapril/utente-input";

export const LatencyDemo = () => {
  return (
    <Space
      justify="center"
      align="center"
      full
      style={{ backgroundColor: "white" }}
    >
      <Theme color="#2c2f33">
        <MobileLayout
          style={{
            backgroundColor: "#2c2f33",
            padding: 20,
            overflowY: "hidden"
          }}
        >
          <Space direction="vertical" size={15} align="start">
            <Space w100 justify="start">
              <Button variant="shadow" size="small">
                <Space>
                  <i className="fas fa-stream"></i>
                  Sort
                </Space>
              </Button>
              <Input placeholder="Filter sources" />
            </Space>
            <Profile src="Singapore" dst="San Jose" />
            <Profile src="Paris" dst="San Jose" />
            <Profile src="Tokyo" dst="Paris" />
            <Profile src="Singapore" dst="Paris" />
            <Profile src="Sydney" dst="San Jose" />
          </Space>
        </MobileLayout>
      </Theme>
    </Space>
  );
};

LatencyDemo.parameters = {};
