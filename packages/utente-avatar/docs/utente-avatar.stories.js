import React from "react";
// We want to always get from source
import { Avatar } from "../lib/utente-avatar";

const imgSrc = "https://randomuser.me/api/portraits/women/21.jpg";

export default {
  title: "Basic/Avatar",
  component: Avatar,
  parameters: {
    componentSubtitle:
      "Avatars can be used to represent people or objects. It supports images, icons or letters."
  },
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    theme: {
      control: { type: "select", options: ["light", "dark"] }
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
    <div style={{ display: "flex", gap: 20 }}>
      <Avatar {...args} text="U" />
      <Avatar {...args} text="US" />
      <Avatar {...args} text="USE" />
      <Avatar {...args} text="USERS" />
      <Avatar {...args} src={imgSrc} />
      <Avatar {...args} icon={<i className="fas fa-search"></i>} />
    </div>
  </div>
);

Primary.args = {
  theme: "light",
  size: "medium",
  shape: "square",
  indented: false
};
