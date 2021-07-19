import React from "react";
// We want to always get from source
import { Checkbox } from "../lib/utente-checkbox";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  parameters: {
    componentSubtitle:
      "a graphical element that permits the user to make a choice between multiple possible mutually exclusive options"
  },
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    theme: {
      control: { type: "select", options: ["light", "dark"] }
    },
    checked: {
      control: {
        options: ["checked", null],
        type: "select"
      }
    }
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
      <Checkbox {...args} size="small" label="Apple" />
      <Checkbox {...args} size="small" label="Orange" />
      <Checkbox {...args} size="small" label="Pear" />
    </div>
  </div>
);

Primary.args = {
  theme: "light"
};
