import React from "react";

import { Steps, Step } from "../lib/utente-steps";
import { Theme } from "@lieinapril/utente-theme";
import { Space } from "@lieinapril/utente-space";

export default {
  title: "Navigation/Steps",
  component: Steps,
  subcomponents: { Step },
  parameters: {
    componentSubtitle:
      "Steps is a navigation bar that guides users through the steps of a task."
  },
  argTypes: {
    variant: {
      options: ["fill", "shadow", "simple"],
      control: { type: "select" }
    },
    className: {
      control: false
    },
    direction: {
      control: false
    }
  }
};

export const Horizontal = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      maxWidth: 1000,
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <Theme color="#fafafa">
      <Space colored style={{ padding: 20 }}>
        <Steps {...args} current={1}>
          <Step title="Step 1" />
          <Step title="Step 2" />
          <Step title="Step 3" />
        </Steps>
      </Space>
      <Space colored style={{ padding: 20 }}>
        <Steps {...args}>
          <Step title="Step 1" icon={<i className="fab fa-twitch" />} />
          <Step title="Step 2" icon={<i className="fab fa-twitch" />} />
          <Step title="Step 3" icon={<i className="fab fa-twitch" />} />
        </Steps>
      </Space>
    </Theme>
    <Theme color="#2c2f33" secondaryColor="#faad14">
      <Space colored style={{ padding: 20 }}>
        <Steps {...args} current={3} size={32}>
          <Step title="Step 1" />
          <Step title="Step 2" />
          <Step title="Step 3" />
        </Steps>
      </Space>
      <Space colored style={{ padding: 20 }}>
        <Steps {...args}>
          <Step title="Step 1" icon={<i className="fab fa-twitch" />} />
          <Step title="Step 2" icon={<i className="fab fa-twitch" />} />
          <Step title="Step 3" icon={<i className="fab fa-twitch" />} />
        </Steps>
      </Space>
    </Theme>
  </div>
);

Horizontal.args = {
  variant: "fill",
  size: 42
};

export const Vertical = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      maxWidth: 400,
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <Theme color="#2c2f33" secondaryColor="#faad14">
      <Space colored style={{ padding: 20, height: 300 }}>
        <Steps {...args} current={3} size={32} direction="vertical">
          <Step title="Step 1" />
          <Step title="Step 2" />
          <Step title="Step 3" />
        </Steps>
      </Space>
      <Space colored style={{ padding: 20 }}>
        <Steps {...args} direction="vertical">
          <Step title="Step 1" icon={<i className="fab fa-twitch" />} />
          <Step title="Step 2" icon={<i className="fab fa-twitch" />} />
          <Step title="Step 3" icon={<i className="fab fa-twitch" />} />
        </Steps>
      </Space>
    </Theme>
  </div>
);

Vertical.args = {
  variant: "fill",
  size: 42
};
