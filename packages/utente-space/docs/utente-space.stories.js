import React from "react";
// We want to always get from source
import { Space } from "../lib/utente-space";

export default {
  title: "Layout/Space",
  component: Space,
  parameters: {
    componentSubtitle: "Set components spacing."
  },
  argTypes: {
    size: {
      control: { type: "select", options: [8, 16, 24, 32, 40] }
    },
    direction: {
      control: { type: "select", options: ["horizontal", "vertical"] }
    },
    align: {
      control: {
        type: "select",
        options: ["start", "center", "end", "baseline"]
      }
    },
    justify: {
      control: {
        type: "select",
        options: ["start", "center", "end", "space-between", "space-around"]
      }
    },
    className: { control: false }
  }
};

export const Primary = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: "#eeeeee"
    }}
  >
    <Space {...args}>
      <span>ABC</span>
      <span>DEF</span>
      <span>GHI</span>
      <span>JKF</span>
    </Space>
  </div>
);

Primary.args = {
  wrap: false
};
