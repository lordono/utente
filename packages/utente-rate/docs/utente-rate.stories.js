import React from "react";
// We want to always get from source
import { Rate } from "../lib/utente-rate";
import { Space } from "@lieinapril/utente-space";
import { Theme } from "@lieinapril/utente-theme";

export default {
  title: "Form/Rate",
  component: Rate,
  parameters: {
    componentSubtitle: "A rate component."
  },
  argTypes: {
    className: { control: false },
    value: { control: false }
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
        <Rate {...args} />
      </Space>
    </Theme>
  </div>
);

Uncontrolled.args = {
  value: 1,
  readOnly: false,
  allowClear: false,
  variant: "shadow",
  shape: "star",
  size: 20,
  count: 5
};
