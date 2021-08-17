import React from "react";
// We want to always get from source
import { Text, Paragraph, Title } from "../lib/utente-text";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

export default {
  title: "Basic/Text",
  component: Text,
  subcomponents: { Title, Paragraph },
  parameters: {
    componentSubtitle:
      "Basic text writing, including headings, body text, lists, and more."
  },
  argTypes: {
    code: { control: false },
    deleted: { control: false },
    disabled: { control: false },
    ellipsis: { control: false },
    keyboard: { control: false },
    mark: { control: false },
    strong: { control: false },
    italic: { control: false },
    underline: { control: false },
    variant: { control: false }
  }
};

const TextWrapper = props => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: props.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    {props.children}
  </div>
);

export const Primary = args => (
  <TextWrapper theme={args.theme}>
    <Space>
      <Space direction="vertical" align="start" style={{ padding: 20 }}>
        <Text {...args} code>
          Code Text
        </Text>
        <Text {...args} keyboard>
          Keyboard Text
        </Text>
        <Text {...args} strong code>
          Bold and Code Text
        </Text>
        <Text {...args} mark>
          Mark Text
        </Text>
        <Text {...args} strong>
          Bold Text
        </Text>
        <Text {...args} italic>
          Italic Text
        </Text>
        <Text {...args} underline>
          Underline Text
        </Text>
        <Text {...args} strong italic>
          Bold and Italic Text
        </Text>
        <Text {...args} deleted>
          Deleted Text
        </Text>
        <Text {...args} variant="danger">
          Danger
        </Text>
        <Text {...args} variant="warning">
          Warning
        </Text>
        <Text {...args} variant="success">
          Success
        </Text>
      </Space>
      <Theme color="#2c2f33">
        <Space
          direction="vertical"
          align="start"
          colored
          style={{ padding: 20 }}
        >
          <Text {...args} code>
            Code Text
          </Text>
          <Text {...args} keyboard>
            Keyboard Text
          </Text>
          <Text {...args} strong code>
            Bold and Code Text
          </Text>
          <Text {...args} mark>
            Mark Text
          </Text>
          <Text {...args} strong>
            Bold Text
          </Text>
          <Text {...args} italic>
            Italic Text
          </Text>
          <Text {...args} underline>
            Underline Text
          </Text>
          <Text {...args} strong italic>
            Bold and Italic Text
          </Text>
          <Text {...args} deleted>
            Deleted Text
          </Text>
          <Text {...args} variant="danger">
            Danger
          </Text>
          <Text {...args} variant="warning">
            Warning
          </Text>
          <Text {...args} variant="success">
            Success
          </Text>
        </Space>
      </Theme>
    </Space>
  </TextWrapper>
);

Primary.args = {
  code: false,
  deleted: false,
  disabled: false,
  ellipsis: false,
  keyboard: false,
  mark: false,
  strong: false,
  italic: false,
  underline: false
};
