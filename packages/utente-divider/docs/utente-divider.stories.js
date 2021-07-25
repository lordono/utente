import React from "react";
// We want to always get from source
import { Divider } from "../lib/utente-divider";

export default {
  title: "Basic/Divider",
  component: Divider,
  parameters: {
    componentSubtitle: "A divider line separates different content."
  },
  argTypes: {
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
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <div>
      <Divider {...args} />
      <span>Something</span>
      <Divider {...args} />
      <span>Something</span>

      <Divider {...args} />
      <span>Something</span>
    </div>
  </div>
);

Primary.args = {
  theme: "light",
  size: 6,
  margin: 10
};
