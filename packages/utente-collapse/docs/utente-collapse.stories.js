import React from "react";
// We want to always get from source
import { Collapse } from "../lib/utente-collapse";

export default {
  title: "Basic/Collapse",
  component: Collapse,
  parameters: {
    componentSubtitle:
      "Displays a graphical control element that provides the user a simple way to trigger an event"
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
      <Collapse {...args}>Hello Button</Collapse>
      <Collapse {...args} selected={true}>
        Selected Collapse
      </Collapse>
    </div>
  </div>
);

Primary.args = {
  theme: "light",
  size: "medium"
};
