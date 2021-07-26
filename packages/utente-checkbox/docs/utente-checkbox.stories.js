import React from "react";
// We want to always get from source
import { Checkbox } from "../lib/utente-checkbox";
import { Button } from "@lieinapril/utente-button";
import { Space } from "@lieinapril/utente-space";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  parameters: {
    componentSubtitle: "Checkbox component."
  },
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: { type: "select" }
    },
    label: { control: false },
    value: { control: false },
    checked: {
      options: [true, false],
      control: { type: "select" }
    }
  }
};

export const Uncontrolled = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <div style={{ display: "flex", gap: 20 }}>
      <Checkbox
        {...args}
        size="small"
        label="Apple"
        value="apple"
        onChange={() => console.log("apple")}
      />
      <Checkbox
        {...args}
        size="small"
        label="Orange"
        value="orange"
        onChange={() => console.log("orange")}
      />
      <Checkbox
        {...args}
        size="small"
        label="Pear"
        value="pear"
        onChange={() => console.log("pear")}
      />
    </div>
  </div>
);

Uncontrolled.args = {
  theme: "light"
};

export const Controlled = args => {
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);

  const onToggle = () => {
    setCheck1(e => !e);
    setCheck2(e => !e);
    setCheck3(e => !e);
  };

  return (
    <div
      style={{
        width: "calc(100% - 6rem)",
        height: "calc(100% - 6rem)",
        padding: "3rem",
        backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
      }}
    >
      <Space direction="vertical" justify="start" align="start" size={20}>
        <Button size="small" onClick={onToggle}>
          Toggle
        </Button>
        <Space justify="start" align="start">
          <Checkbox
            {...args}
            size="small"
            label="Apple"
            value="apple"
            checked={check1}
            onClick={() => setCheck1(e => !e)}
          />
          <Checkbox
            {...args}
            size="small"
            label="Orange"
            value="orange"
            checked={check2}
            onClick={() => setCheck2(e => !e)}
          />
          <Checkbox
            {...args}
            size="small"
            label="Pear"
            value="pear"
            checked={check3}
            onClick={() => setCheck3(e => !e)}
          />
        </Space>
      </Space>
    </div>
  );
};

Controlled.args = {
  theme: "light"
};
