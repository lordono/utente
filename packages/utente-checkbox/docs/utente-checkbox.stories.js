import React from "react";
// We want to always get from source
import { Checkbox } from "../lib/utente-checkbox";
import { Button } from "@lieinapril/utente-button";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  parameters: {
    componentSubtitle: "Checkbox component."
  },
  argTypes: {
    variant: {
      options: ["fill", "shadow", "border"],
      control: { type: "select" }
    },
    label: { control: false },
    value: { control: false },
    checked: { control: false }
  }
};

export const Uncontrolled = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: "#eeeeee"
    }}
  >
    <Space size={20} style={{ padding: 20 }}>
      <Checkbox
        {...args}
        size="small"
        label="Apple"
        value="apple"
        onChange={e => console.log("apple", e.target.checked)}
      />
      <Checkbox
        {...args}
        size="small"
        label="Orange"
        value="orange"
        onChange={e => console.log("orange", e.target.checked)}
      />
      <Checkbox
        {...args}
        size="small"
        label="Pear"
        value="pear"
        onChange={e => console.log("pear", e.target.checked)}
      />
    </Space>
    <Theme color="#2c2f33" intensity={0.2}>
      <Space size={20} style={{ padding: 20 }} colored>
        <Checkbox
          {...args}
          size="small"
          label="Apple"
          value="apple"
          onChange={e => console.log("apple", e.target.checked)}
        />
        <Checkbox
          {...args}
          size="small"
          label="Orange"
          value="orange"
          onChange={e => console.log("orange", e.target.checked)}
        />
        <Checkbox
          {...args}
          size="small"
          label="Pear"
          value="pear"
          onChange={e => console.log("pear", e.target.checked)}
        />
      </Space>
    </Theme>
  </div>
);

Uncontrolled.args = {
  variant: "shadow"
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
        backgroundColor: "#eeeeee"
      }}
    >
      <Space direction="vertical" justify="start" align="start" size={20}>
        <Button size="small" onClick={onToggle} variant="shadow">
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
            onChange={e => console.log(e.target.checked)}
          />
          <Checkbox
            {...args}
            size="small"
            label="Orange"
            value="orange"
            checked={check2}
            onClick={() => setCheck2(e => !e)}
            onChange={e => console.log(e.target.checked)}
          />
          <Checkbox
            {...args}
            size="small"
            label="Pear"
            value="pear"
            checked={check3}
            onClick={() => setCheck3(e => !e)}
            onChange={e => console.log(e.target.checked)}
          />
        </Space>
      </Space>
    </div>
  );
};

Controlled.args = {
  variant: "shadow"
};
