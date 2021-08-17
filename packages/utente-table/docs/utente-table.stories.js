import React from "react";
// We want to always get from source
import { Table } from "../lib/utente-table";
import { simple_col, simple_data } from "./data";

export default {
  title: "Display/Table",
  component: Table,
  parameters: {
    componentSubtitle: "A table displays rows of data."
  },
  argTypes: {
    variant: {
      options: ["fill", "border", "shadow"],
      control: { type: "select" }
    },
    className: { control: false },
    columns: { control: false },
    data: { control: false }
  }
};

const CardWrapper = ({ style, children }) => (
  <div
    style={{
      height: "calc(100% - 30px)",
      padding: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 30,
      backgroundColor: "#eeeeee",
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
    <CardWrapper>
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
  variant: "shadow"
};
