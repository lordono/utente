import React from "react";
// We want to always get from source
import { Switch } from "../lib/utente-switch";
import { Space } from "@lieinapril/utente-space";
import { Button } from "@lieinapril/utente-button";
import { Theme } from "@lieinapril/utente-theme";

export default {
  title: "Form/Switch",
  component: Switch,
  parameters: {
    componentSubtitle: "Switching Selector."
  },
  argTypes: {
    variant: { control: false },
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
      backgroundColor: "#eeeeee"
    }}
  >
    <Theme color="#0050b3" secondaryColor="#faad14" distance={3}>
      <Space colored style={{ padding: 20 }}>
        <Switch
          {...args}
          variant="shadow"
          onChange={e => console.log(e.target.checked)}
        />
        <Switch
          {...args}
          variant="fill"
          onChange={e => console.log(e.target.checked)}
        />
      </Space>
    </Theme>
    <Space style={{ padding: 20 }}>
      <Switch
        {...args}
        variant="shadow"
        onChange={e => console.log(e.target.checked)}
      />
      <Switch
        {...args}
        variant="fill"
        onChange={e => console.log(e.target.checked)}
      />
    </Space>
  </div>
);

Uncontrolled.args = {
  label: "English",
  value: "english"
};

export const Controlled = args => {
  const [switch1, setSwitch1] = React.useState(false);
  const [switch2, setSwitch2] = React.useState(false);

  const onToggle = () => {
    setSwitch1(e => !e);
    setSwitch2(e => !e);
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
        <Button size="small" onClick={onToggle}>
          Toggle
        </Button>
        <Space justify="start" align="start">
          <Switch
            {...args}
            variant="shadow"
            checked={switch1}
            onClick={() => setSwitch1(e => !e)}
            onChange={e => console.log(e.target.checked)}
          />
          <Switch
            {...args}
            variant="fill"
            checked={switch2}
            onClick={() => setSwitch2(e => !e)}
            onChange={e => console.log(e.target.checked)}
          />
        </Space>
      </Space>
    </div>
  );
};

Controlled.args = {
  label: "English",
  value: "english"
};
