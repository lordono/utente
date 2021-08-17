import React from "react";
// We want to always get from source
import { Tag } from "../lib/utente-tag";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

export default {
  title: "Display/Tag",
  component: Tag,
  parameters: {
    componentSubtitle: "Tag for categorizing or markup."
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" }
    },
    className: { control: false },
    variant: { control: false }
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
    <Space size={10} style={{ padding: 20 }}>
      <Tag {...args}>Article</Tag>
      <Tag {...args} variant="shadow">
        Electronics
      </Tag>
      <Tag {...args} variant="border">
        5G
      </Tag>
    </Space>
    <Theme color="#2c2f33">
      <Space size={10} colored style={{ padding: 20 }}>
        <Tag {...args}>Article</Tag>
        <Tag {...args} variant="shadow">
          Electronics
        </Tag>
        <Tag {...args} variant="border">
          5G
        </Tag>
      </Space>
    </Theme>
  </div>
);

Primary.args = {
  size: "small",
  hoverable: false
};
