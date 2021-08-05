import React from "react";

import { Card } from "../lib/utente-card";
import { Theme } from "@lieinapril/utente-theme";
import { Space } from "@lieinapril/utente-space";

const headphoneImg =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const watchImg =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

export default {
  title: "Display/Card",
  component: Card,
  parameters: {
    componentSubtitle: "Simple rectangular container."
  },
  argTypes: {
    cover: {
      options: ["Headphone Image", "Watch Image"],
      mapping: {
        "Headphone Image": <img alt="example" src={headphoneImg} />,
        "Watch Image": <img alt="example" src={watchImg} />
      }
    },
    className: { control: false },
    contentClass: { control: false }
  }
};

const CardWrapper = ({ theme, style, children }) => (
  <div
    style={{
      height: "calc(100% - 30px)",
      padding: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 30,
      backgroundColor: theme === "dark" ? "#2c2f33" : "#eeeeee",
      ...style
    }}
  >
    {children}
  </div>
);

export const Simple = args => (
  <CardWrapper>
    <Theme color={args.color}>
      <Space full colored justify="center">
        <Card {...args} style={{ width: 300, height: 300 }}>
          Standard Card
        </Card>
      </Space>
    </Theme>
  </CardWrapper>
);

Simple.args = {
  variant: "fill",
  color: "#eeeeee",
  hoverable: false,
  padded: true
};

export const Cover = args => (
  <CardWrapper>
    <Theme color={args.color}>
      <Space full colored justify="center">
        <Card {...args} style={{ width: 300, height: 350 }}>
          Standard Card
        </Card>
      </Space>
    </Theme>
  </CardWrapper>
);

Cover.args = {
  variant: "fill",
  color: "#eeeeee",
  hoverable: false,
  padded: true,
  cover: "Headphone Image"
};

export const Multiple = args => (
  <CardWrapper>
    <Theme color={args.color}>
      <Space full colored justify="center" size={25}>
        <Card {...args} style={{ width: 300, height: 350 }}>
          Card One
        </Card>
        <Card {...args} style={{ width: 300, height: 350 }}>
          Card Two
        </Card>
      </Space>
    </Theme>
  </CardWrapper>
);

Multiple.args = {
  variant: "fill",
  color: "#eeeeee",
  hoverable: false,
  padded: true,
  cover: "Headphone Image"
};
