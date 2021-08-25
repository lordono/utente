import React from "react";
// We want to always get from source
import { Layout, Header, Footer, Content } from "../lib/utente-layout";

export default {
  title: "Layout/Layout",
  component: Layout,
  subcomponents: { Header, Footer, Content },
  parameters: {
    componentSubtitle: "Handling the overall layout of a page."
  },
  argTypes: {
    variant: { control: false },
    className: {
      control: false
    }
  }
};

const textStyle = {
  textAlign: "center",
  verticalAlign: "baseline",
  color: "white"
};

const footerStyle = { backgroundColor: "#91d5ff", ...textStyle };
const headerStyle = { backgroundColor: "#69c0ff", ...textStyle };
const contentStyle = {
  backgroundColor: "#1890ff",
  ...textStyle,
  lineHeight: "120px",
  minHeight: 120
};

export const Primary = args => (
  <Layout style={{ width: "100%" }}>
    <Header style={headerStyle}>Header</Header>
    <Content style={contentStyle}>Content</Content>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
);

Primary.args = {};
