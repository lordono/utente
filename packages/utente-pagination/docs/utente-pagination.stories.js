import React from "react";
// We want to always get from source
import { Pagination } from "../lib/utente-pagination";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

export default {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: {
    componentSubtitle: "A rate component."
  },
  argTypes: {
    className: { control: false }
  }
};

export const Uncontrolled = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: "#eeeeee"
    }}
  >
    <Theme color="#0050b3" secondaryColor="#faad14" distance={3}>
      <Space colored style={{ padding: 20 }}>
        <Pagination {...args} />
      </Space>
    </Theme>
  </div>
);

Uncontrolled.args = {
  total: 105,
  pageSize: 10,
  variant: "fill",
  size: 20,
  defaultCurrent: 3
};
