import React from "react";
// We want to always get from source
import { Avatar } from "../lib/utente-avatar";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

const imgSrc = "https://randomuser.me/api/portraits/women/21.jpg";

export default {
  title: "Display/Avatar",
  component: Avatar,
  parameters: {
    componentSubtitle:
      "Avatars can be used to represent people or objects. It supports images, icons or letters."
  },
  argTypes: {
    variant: { control: false },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    shape: {
      control: { type: "select", options: ["square", "circle"] }
    },
    text: {
      control: false
    },
    src: {
      control: false
    },
    icon: {
      control: false
    },
    className: {
      control: false
    }
  }
};

export const Primary = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      height: "100%",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <Space size={20} style={{ padding: 20 }}>
      <Avatar {...args} text="U" />
      <Avatar {...args} text="USERS" />
      <Avatar {...args} src={imgSrc} />
      <Avatar {...args} icon={<i className="fas fa-search"></i>} />
      <Avatar
        {...args}
        icon={<i className="fas fa-search"></i>}
        variant="fill"
      />
      <Avatar
        {...args}
        icon={<i className="fas fa-search"></i>}
        variant="border"
      />
    </Space>
    <Theme color="#0050b3" secondaryColor="#f0f0f0" intensity={0.1}>
      <Space size={20} colored style={{ padding: 20 }}>
        <Avatar {...args} text="U" />
        <Avatar {...args} text="USERS" />
        <Avatar {...args} src={imgSrc} />
        <Avatar {...args} icon={<i className="fas fa-search"></i>} />
        <Avatar
          {...args}
          icon={<i className="fas fa-search"></i>}
          variant="fill"
        />
        <Avatar
          {...args}
          icon={<i className="fas fa-search"></i>}
          variant="border"
        />
      </Space>
    </Theme>
  </div>
);

Primary.args = {
  variant: "shadow",
  surface: "normal",
  size: "medium",
  shape: "square",
  indented: false
};
