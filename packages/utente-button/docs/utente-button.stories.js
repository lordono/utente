import React from "react";
// We want to always get from source
import { Button } from "../lib/utente-button";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

export default {
  title: "Basic/Button",
  component: Button,
  parameters: {
    componentSubtitle: "To trigger an operation."
  },
  argTypes: {
    shape: { control: false },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" }
    },
    surface: {
      options: ["normal", "convex", "concave"],
      control: { type: "select" }
    },
    className: { control: false },
    variant: { control: false }
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
      <Button {...args} variant="fill">
        Fill
      </Button>
      <Button {...args} variant="shadow">
        Shadow
      </Button>
      <Button {...args} variant="border">
        Border
      </Button>
      <Button {...args} variant="border" shape="circle">
        <i className="fas fa-calendar"></i>
      </Button>
    </Space>
    <Theme color="#2c2f33" secondaryColor="#faad14">
      <Space colored size={20} style={{ padding: 20 }}>
        <Button {...args} variant="fill">
          Fill
        </Button>
        <Button {...args} variant="shadow">
          Shadow
        </Button>
        <Button {...args} variant="border">
          Border
        </Button>
        <Button {...args} variant="border" shape="circle">
          <i className="fas fa-calendar"></i>
        </Button>
      </Space>
    </Theme>
  </div>
);

Primary.args = {
  size: "medium",
  surface: "normal"
};
