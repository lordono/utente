import React from "react";
// We want to always get from source
import { Tag } from "../lib/utente-tag";

export default {
  title: "Basic/Tag",
  component: Tag,
  parameters: {
    componentSubtitle: "Tag for categorizing or markup."
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
    <div style={{ display: "flex", gap: 10 }}>
      <Tag {...args}>Article</Tag>
      <Tag {...args}>Electronics</Tag>
      <Tag {...args}>5G</Tag>
    </div>
  </div>
);

Primary.args = {
  theme: "light",
  size: "small"
};
