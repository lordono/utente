import React from "react";
// We want to always get from source
import { Input } from "../lib/utente-input";
import { Button } from "@lieinapril/utente-button";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

export default {
  title: "Form/Input",
  component: Input,
  parameters: {
    componentSubtitle:
      "A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data."
  },
  argTypes: {
    size: { control: false },
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
      backgroundColor: "#eeeeee"
    }}
  >
    <Theme color="#2c2f33">
      <Space colored size={20}>
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
      </Space>
    </Theme>
    <Space colored size={20}>
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
    </Space>
  </div>
);

Primary.args = {
  variant: "fill"
};

export const Controlled = args => {
  const [search, setSearch] = React.useState("");
  const onClick = () => setSearch("Search");
  return (
    <div
      style={{
        width: "calc(100% - 6rem)",
        height: "calc(100% - 6rem)",
        padding: "3rem",
        backgroundColor: "#eeeeee"
      }}
    >
      <Space direction="vertical" size={20} align="start">
        <Button size="small" theme={args.them} onClick={onClick}>
          Write `Search`
        </Button>
        <Input
          {...args}
          placeholder="Type to search..."
          style={{ width: 200 }}
          size="small"
          value={search}
          onChange={e => setSearch(e.target.value)}
          prefix={<i className="fas fa-search"></i>}
        />
      </Space>
    </div>
  );
};

Controlled.args = {
  variant: "fill"
};
