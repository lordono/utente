import React from "react";
// We want to always get from source
import { Radio } from "../lib/utente-radio";

export default {
  title: "Form/Radio",
  component: Radio,
  parameters: {
    componentSubtitle: "Radio."
  },
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    theme: {
      control: { type: "select", options: ["light", "dark"] }
    },
    name: {
      control: false
    },
    className: { control: false },
    label: { control: false },
    value: { control: false }
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
      <Radio {...args} size="small" label="One" name="example1" value="one" />
      <Radio {...args} size="small" label="Two" name="example1" value="two" />
      <Radio
        {...args}
        size="small"
        label="Three"
        name="example1"
        value="three"
      />
    </div>
  </div>
);

Primary.args = {
  theme: "light"
};
