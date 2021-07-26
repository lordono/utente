import React from "react";
// We want to always get from source
import { Button } from "../lib/utente-button";

export default {
  title: "Basic/Button",
  component: Button,
  parameters: {
    componentSubtitle: "To trigger an operation."
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" }
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "select" }
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
      <Button {...args}>Hello Button</Button>
      <Button {...args} selected={true}>
        Selected Button
      </Button>
    </div>
  </div>
);

Primary.args = {
  theme: "light",
  size: "medium"
};
