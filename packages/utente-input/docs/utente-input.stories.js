import React from "react";
// We want to always get from source
import { Input } from "../lib/utente-input";

export default {
  title: "Form/Input",
  component: Input,
  parameters: {
    componentSubtitle:
      "A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data."
  },
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    theme: {
      control: { type: "select", options: ["light", "dark"] }
    },
    prefix: { control: false },
    suffix: { control: false },
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
      <Input
        {...args}
        placeholder="Type to search..."
        style={{ width: 200 }}
        size="small"
        prefix={<i className="fas fa-search"></i>}
      />
      <Input
        {...args}
        placeholder="Password"
        style={{ width: 200 }}
        size="medium"
        suffix={<i className="fas fa-eye-slash"></i>}
      />
      <Input
        {...args}
        placeholder="Type to search..."
        size="large"
        style={{ width: 200 }}
      />
    </div>
  </div>
);

Primary.args = {
  theme: "light",
  size: "medium"
};
