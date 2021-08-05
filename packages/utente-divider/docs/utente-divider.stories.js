import React from "react";
// We want to always get from source
import { Divider } from "../lib/utente-divider";
import { Theme } from "@lieinapril/utente-theme";
import { Space } from "@lieinapril/utente-space";

export default {
  title: "Layout/Divider",
  component: Divider,
  parameters: {
    componentSubtitle: "A divider line separates different content."
  },
  argTypes: {
    className: {
      control: false
    }
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
    <Theme color="#2c2f33" intensity={0.5}>
      <Space colored style={{ width: "100%", padding: 20 }}>
        <div style={{ width: "100%" }}>
          <Divider {...args} />
          <span>Something</span>
          <Divider {...args} />
          <span>Something</span>

          <Divider {...args} />
          <span>Something</span>
        </div>
      </Space>
    </Theme>
    <Space style={{ width: "100%", padding: 20 }}>
      <div style={{ width: "100%" }}>
        <Divider {...args} />
        <span>Something</span>
        <Divider {...args} />
        <span>Something</span>

        <Divider {...args} />
        <span>Something</span>
      </div>
    </Space>
  </div>
);

Primary.args = {
  variant: "fill",
  size: 6,
  margin: 10
};
