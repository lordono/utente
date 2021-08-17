import React from "react";
import MobileLayout from "./MobileLayout";
import { Button, Space, Avatar, Theme, Text } from "../../lib/utente";

const iconProps = {
  shape: "circle",
  style: {
    fontSize: 18,
    width: 48,
    height: 48,
    margin: "0 20px"
  }
};

export const SelectionDemo = args => {
  return (
    <Space
      justify="center"
      align="center"
      full
      style={{ backgroundColor: "white" }}
    >
      <MobileLayout style={{ backgroundColor: "#fafafa" }}>
        <Theme color="#0050b3">
          <Space
            full
            colored
            direction="vertical"
            size={15}
            style={{ height: 200, borderRadius: 15, paddingTop: 20 }}
          >
            <Space
              justify="space-between"
              align="start"
              style={{ width: "100%" }}
            >
              <Button {...iconProps}>
                <i className="fas fa-cog"></i>
              </Button>
              <Button {...iconProps}>
                <i className="fas fa-ellipsis-v"></i>
              </Button>
            </Space>
            <Text strong>Tracktime</Text>
            <Text style={{ fontWeight: 100, fontSize: 60 }}>04:22</Text>
          </Space>
        </Theme>
        <Space justify="center" style={{ width: "100%", height: 250 }}>
          <Avatar
            icon={<i className="fas fa-pause"></i>}
            variant="shadow"
            style={{ width: 100, height: 100 }}
            shape="circle"
          />
        </Space>
        <Theme color="#2c2f33" intensity={0.3}>
          <Space
            colored
            style={{ width: "100%", height: 100, borderRadius: 15 }}
            justify="center"
            align="center"
            size={40}
          >
            <Button variant="shadow" surface="convex">
              Round 1/4
            </Button>
            <Button variant="shadow" surface="convex">
              Goal 1/12
            </Button>
          </Space>
        </Theme>
      </MobileLayout>
    </Space>
  );
};

SelectionDemo.parameters = {};
