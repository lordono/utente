import React from "react";
// We want to always get from source
import { Progress } from "../lib/utente-progress";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

export default {
  title: "Basic/Progress",
  component: Progress,
  parameters: {
    componentSubtitle: "To trigger an operation."
  },
  argTypes: {
    shape: { control: false },
    surface: {
      options: ["normal", "convex", "concave"],
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
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <Space size={20} style={{ padding: 20 }} direction="vertical" align="start">
      <Progress {...args} value="100" max="100" />
      <Progress {...args} value="80" max="100" variant="border" />
      <Progress {...args} value="80" max="100" variant="shadow" />
    </Space>
    <Theme color="#2c2f33" secondaryColor="#faad14" intensity={0.35}>
      <Space
        colored
        size={20}
        style={{ padding: 20 }}
        direction="vertical"
        align="start"
      >
        <Progress {...args} max="1" value="0.5" />
        <Progress {...args} value="80" max="100" variant="border" />
        <Progress {...args} value="80" max="100" variant="shadow" />
      </Space>
    </Theme>
  </div>
);

Primary.args = {
  size: 20
};
