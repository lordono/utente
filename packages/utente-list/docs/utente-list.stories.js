import React from "react";
// We want to always get from source
import { List, ListItem } from "../lib/utente-list";
import { simple_data, complex_data } from "./data";

export default {
  title: "Basic/List",
  component: List,
  subcomponents: { ListItem },
  parameters: {
    componentSubtitle: "Simple List."
  },
  argTypes: {
    theme: {
      control: { type: "select", options: ["light", "dark"] }
    }
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

export const Simple = args => {
  const data = React.useMemo(() => simple_data, [simple_data]);
  return (
    <CardWrapper theme={args.theme}>
      <List
        {...args}
        dataSource={data}
        itemSize={65}
        height={200}
        width={400}
        component={null}
      />
    </CardWrapper>
  );
};
Simple.args = {
  theme: "light"
};

export const Complex = args => {
  const data = React.useMemo(() => complex_data, [complex_data]);
  return (
    <CardWrapper theme={args.theme}>
      <List
        {...args}
        dataSource={data}
        itemSize={100}
        height={400}
        width={500}
        component={ListItem}
      />
    </CardWrapper>
  );
};
Complex.args = {
  theme: "light"
};

export const AutoHeight = args => {
  const data = React.useMemo(() => complex_data, [complex_data]);
  return (
    <CardWrapper theme={args.theme}>
      <div style={{ height: 300, width: 400 }}>
        <List
          {...args}
          dataSource={data}
          itemSize={100}
          height="auto"
          width={500}
          component={ListItem}
        />
      </div>
    </CardWrapper>
  );
};
AutoHeight.args = {
  theme: "light"
};

export const AutoBoth = args => {
  const data = React.useMemo(() => complex_data, [complex_data]);
  return (
    <CardWrapper theme={args.theme}>
      <div style={{ height: 300, width: 400 }}>
        <List
          {...args}
          dataSource={data}
          itemSize={100}
          height="auto"
          width="auto"
          component={ListItem}
        />
      </div>
    </CardWrapper>
  );
};
AutoBoth.args = {
  theme: "light"
};
