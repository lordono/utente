import React from "react";
// We want to always get from source
import { Card } from "../lib/utente-card";

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
    theme: {
      control: { type: "select", options: ["light", "dark"] }
    },
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
  <CardWrapper theme={args.theme}>
    <Card {...args} style={{ width: 300, height: 300 }}>
      Standard Card
    </Card>
  </CardWrapper>
);

Simple.args = {
  theme: "light",
  hoverable: false,
  padded: true
};

export const Cover = args => (
  <CardWrapper theme={args.theme}>
    <Card {...args} style={{ width: 300, height: 350 }}>
      Standard Card
    </Card>
  </CardWrapper>
);

Cover.args = {
  theme: "light",
  hoverable: false,
  padded: true,
  cover: "Headphone Image"
};

export const Multiple = args => (
  <CardWrapper theme={args.theme}>
    <Card {...args} style={{ width: 300, height: 350 }}>
      Card One
    </Card>
    <Card {...args} style={{ width: 300, height: 350 }}>
      Card Two
    </Card>
  </CardWrapper>
);

Multiple.args = {
  theme: "light",
  hoverable: false,
  padded: true,
  cover: "Headphone Image"
};
