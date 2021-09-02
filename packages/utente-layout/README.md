# `@lieinapril/utente-layout`

> Handling the overall layout of a page.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

```bash
npm install @lieinapril/utente-layout
```

## Usage

```JSX
import { Layout, Header, Footer, Content, Sider } from "@lieinapril/utente-layout";

const Example = () => {
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
  const siderStyle = { ...contentStyle, backgroundColor: "#3ba0e9", width: 200 };
  return (
    <div
      style={{
        width: "calc(100% - 6rem)",
        height: "calc(100% - 6rem)",
        padding: "3rem",
        backgroundColor: "#eeeeee"
      }}
    >
      <Layout style={{ width: "100%" }}>
        <Sider style={siderStyle}>Sider</Sider>
        <Layout style={{ width: "100%" }}>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
```
