import React from "react";
import { Button, Space, Checkbox, Radio } from "../../lib/utente";

export const SelectionDemo = args => {
  return (
    <Space
      justify="center"
      align="center"
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white"
      }}
    >
      <div
        style={{
          backgroundColor: "#eee",
          width: 300,
          height: 550,
          padding: 20,
          borderRadius: 15
        }}
      >
        <Space>
          <Button size="large" variant="shadow">
            Pear
          </Button>
          <Checkbox label="Apple" />
          <Radio label="Orange" value="orange" />
        </Space>
      </div>
    </Space>
  );
};

SelectionDemo.parameters = {};
