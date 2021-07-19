import React from "react";
// We want to always get from source
import { Switch } from "../lib/utente-switch";

export default {
  title: "Form/Switch",
  component: Switch,
  parameters: {
    componentSubtitle:
      "a graphical control element that allows the user to choose one from a predefined set of options"
  },
  argTypes: {
    theme: {
      control: { type: "select", options: ["light", "dark"] }
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
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <div style={{ display: "flex", gap: 20 }}>
      <Switch {...args} />
    </div>
  </div>
);

Primary.args = {
  theme: "light",
  label: "English"
};
