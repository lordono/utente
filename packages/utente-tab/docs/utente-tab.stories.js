import React from "react";
// We want to always get from source
import { Tab, TabPane } from "../lib/utente-tab";

export default {
  title: "Basic/Tab",
  component: Tab,
  subcomponents: { TabPane },
  parameters: {
    componentSubtitle: "Tabs make it easy to switch between different views."
  },
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    theme: {
      control: { type: "select", options: ["light", "dark"] }
    },
    className: {
      control: false
    }
  }
};

export const Primary = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      height: "100%",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <div style={{ display: "flex", gap: 20 }}>
      <Tab>
        <TabPane key="content1" tab="Tab 1">
          content 1
        </TabPane>
        <TabPane key="content2" tab="Tab 2">
          content 2
        </TabPane>
        <TabPane key="content3" tab="Tab 3">
          content 3
        </TabPane>
      </Tab>
    </div>
  </div>
);

Primary.args = {
  theme: "light",
  size: "medium"
};
