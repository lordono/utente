import React from "react";
// We want to always get from source
import { Table } from "../lib/utente-table";
import { simple_col, simple_data } from "./data";

export default {
  title: "Basic/Table",
  component: Table,
  parameters: {
    componentSubtitle: "A table displays rows of data."
  },
  argTypes: {
    theme: {
      control: { type: "select", options: ["light", "dark"] }
    },
    className: { control: false },
    columns: { control: false },
    data: { control: false }
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
  const columns = React.useMemo(() => simple_col, [simple_col]);
  return (
    <CardWrapper theme={args.theme}>
      <Table
        {...args}
        data={data}
        columns={columns}
        style={{ maxWidth: 800 }}
      />
    </CardWrapper>
  );
};
Simple.args = {
  theme: "light"
};
