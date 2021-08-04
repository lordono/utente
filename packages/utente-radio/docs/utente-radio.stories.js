import React from "react";
// We want to always get from source
import { Radio } from "../lib/utente-radio";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

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
    variant: {
      options: ["fill", "shadow", "border"],
      control: { type: "select" }
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
    <Space size={20} style={{ padding: 20 }}>
      <Radio {...args} size="small" label="One" name="example1" value="one" />
      <Radio {...args} size="small" label="Two" name="example1" value="two" />
      <Radio
        {...args}
        size="small"
        label="Three"
        name="example1"
        value="three"
      />
    </Space>

    <Theme color="#2c2f33" intensity={0.25}>
      <Space colored size={20} style={{ padding: 20 }}>
        <Radio {...args} size="small" label="One" name="example2" value="one" />
        <Radio {...args} size="small" label="Two" name="example2" value="two" />
        <Radio
          {...args}
          size="small"
          label="Three"
          name="example2"
          value="three"
        />
      </Space>
    </Theme>
  </div>
);

Primary.args = {
  variant: "shadow"
};
