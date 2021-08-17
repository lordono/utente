import React from "react";
// We want to always get from source
import { Radio, RadioGroup } from "../lib/utente-radio";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

export default {
  title: "Form/Radio",
  component: Radio,
  subcomponents: { RadioGroup },
  parameters: {
    componentSubtitle: "Radio."
  },
  argTypes: {
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
      <Radio {...args} name="example1" value="one">
        One
      </Radio>
      <Radio {...args} name="example1" value="two">
        Two
      </Radio>
      <Radio {...args} name="example1" value="three">
        Three
      </Radio>
    </Space>

    <Theme color="#2c2f33" intensity={0.25}>
      <Space colored size={20} style={{ padding: 20 }}>
        <Radio {...args} name="example2" value="one">
          One
        </Radio>
        <Radio {...args} name="example2" value="two">
          Two
        </Radio>
        <Radio {...args} name="example2" value="three">
          Three
        </Radio>
      </Space>
    </Theme>
  </div>
);

Primary.args = {
  variant: "shadow"
};

export const Group = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <Space size={20} style={{ padding: 20 }}>
      <RadioGroup defaultValue="three">
        <Radio {...args} value="one">
          One
        </Radio>
        <Radio {...args} value="two">
          Two
        </Radio>
        <Radio {...args} value="three">
          Three
        </Radio>
      </RadioGroup>
    </Space>
    <Space size={20} style={{ padding: 20 }}>
      <RadioGroup>
        <Radio {...args} value="one">
          One
        </Radio>
        <Radio {...args} value="two">
          Two
        </Radio>
        <Radio {...args} value="three">
          Three
        </Radio>
      </RadioGroup>
    </Space>
  </div>
);

Group.args = {
  variant: "shadow"
};
