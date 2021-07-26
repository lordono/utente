import React from "react";
// We want to always get from source
import { Switch } from "../lib/utente-switch";
import { Space } from "@lieinapril/utente-space";
import { Button } from "@lieinapril/utente-button";

export default {
  title: "Form/Switch",
  component: Switch,
  parameters: {
    componentSubtitle: "Switching Selector."
  },
  argTypes: {
    theme: {
      control: { type: "select", options: ["light", "dark"] }
    },
    className: { control: false },
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
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <Space>
      <Switch {...args} onChange={e => console.log(e.target.checked)} />
    </Space>
  </div>
);

Uncontrolled.args = {
  theme: "light",
  label: "English",
  value: "english"
};

export const Controlled = args => {
  const [switch1, setSwitch1] = React.useState(false);

  const onToggle = () => {
    setSwitch1(e => !e);
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
          <Switch
            {...args}
            checked={switch1}
            onClick={() => setSwitch1(e => !e)}
            onChange={e => console.log(e.target.checked)}
          />
        </Space>
      </Space>
    </div>
  );
};

Controlled.args = {
  theme: "light",
  label: "English",
  value: "english"
};
