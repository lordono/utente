import React from "react";

import { Menu, MenuItem } from "../lib/utente-menu";
import { Theme } from "@lieinapril/utente-theme";
import { Space } from "@lieinapril/utente-space";

export default {
  title: "Navigation/Menu",
  component: Menu,
  subcomponents: { MenuItem },
  parameters: {
    componentSubtitle: "A versatile menu for navigation."
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

export const Primary = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      maxWidth: 800,
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <Theme color="#fafafa">
      <Space colored style={{ padding: 20 }}>
        <Menu {...args}>
          <MenuItem key="content1" icon={<i className="fab fa-twitch" />}>
            Tab 1
          </MenuItem>
          <MenuItem key="content2" icon={<i className="fab fa-twitch" />}>
            Tab 2
          </MenuItem>
          <MenuItem key="content3" icon={<i className="fab fa-twitch" />}>
            Tab 3
          </MenuItem>
        </Menu>
      </Space>
    </Theme>
    <Theme color="#2c2f33" secondaryColor="#faad14">
      <Space colored style={{ padding: 20 }}>
        <Menu {...args}>
          <MenuItem key="content1" icon={<i className="fab fa-twitch" />}>
            Tab 1
          </MenuItem>
          <MenuItem key="content2" icon={<i className="fab fa-twitch" />}>
            Tab 2
          </MenuItem>
          <MenuItem key="content3" icon={<i className="fab fa-twitch" />}>
            Tab 3
          </MenuItem>
        </Menu>
      </Space>
    </Theme>
  </div>
);

Primary.args = {
  variant: "fill"
};

export const Horizontal = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      maxWidth: 800,
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <Theme color="#fafafa">
      <Space colored style={{ padding: 20 }}>
        <Menu {...args}>
          <MenuItem key="content1" icon={<i className="fab fa-twitch" />}>
            Tab 1
          </MenuItem>
          <MenuItem key="content2" icon={<i className="fab fa-twitch" />}>
            Tab 2
          </MenuItem>
          <MenuItem key="content3" icon={<i className="fab fa-twitch" />}>
            Tab 3
          </MenuItem>
        </Menu>
      </Space>
    </Theme>
    <Theme color="#2c2f33" secondaryColor="#faad14">
      <Space colored style={{ padding: 20 }}>
        <Menu {...args}>
          <MenuItem key="content1" icon={<i className="fab fa-twitch" />}>
            Tab 1
          </MenuItem>
          <MenuItem key="content2" icon={<i className="fab fa-twitch" />}>
            Tab 2
          </MenuItem>
          <MenuItem key="content3" icon={<i className="fab fa-twitch" />}>
            Tab 3
          </MenuItem>
        </Menu>
      </Space>
    </Theme>
  </div>
);

Horizontal.args = {
  variant: "fill",
  direction: "horizontal"
};
