import React from "react";
import MobileLayout from "./MobileLayout";
import { Button, Space, Text, List, Divider } from "../../lib/utente";

const earningData = [
  {
    icon: "fas fa-address-card",
    name: "Address Card",
    desc: "5 Costa Rica Street"
  },
  {
    icon: "fab fa-apple-pay",
    name: "Payment Amount",
    desc: "$45.50"
  },
  {
    icon: "fas fa-calendar",
    name: "Date of Payment",
    desc: "5 Dec 2019"
  }
];

const EarningListItem = ({ data, index, style }) => {
  const { items, theme, separator_size } = data;
  const item = items[index];

  const overallStyle = {
    ...style
  };

  return (
    <Space
      direction="vertical"
      justify="space-between"
      align="space-between"
      style={overallStyle}
    >
      <Divider
        margin={0}
        size={separator_size}
        theme={theme}
        style={{ opacity: index === 0 ? 0 : 1 }}
      />
      <Space justify="space-around" align="start">
        <Button
          style={{ width: 40, height: 40, fontSize: 18 }}
          variant="fill"
          selected
        >
          <i className={item.icon} />
        </Button>
        <Space direction="vertical" align="start" size={5}>
          <Text style={{ color: "#333", fontSize: "0.85rem" }}>
            {item.name}
          </Text>
          <Text style={{ color: "#bbb", fontSize: "0.75rem" }}>
            {item.desc}
          </Text>
        </Space>
        <Button shape="circle" style={{ width: 40, height: 40 }} variant="fill">
          <i className="fas fa-arrow-right" />
        </Button>
      </Space>
      <div />
    </Space>
  );
};

export const EarningDemo = args => {
  return (
    <Space
      justify="center"
      align="center"
      full
      style={{ backgroundColor: "white" }}
    >
      <MobileLayout
        style={{
          backgroundColor: "#eee",
          padding: 20,
          width: 300,
          height: 540
        }}
      >
        <Space justify="space-between" style={{ marginBottom: 60 }}>
          <Button shape="circle" size="small">
            <i className="fas fa-arrow-left" />
          </Button>
          <Text strong style={{ color: "#555", fontSize: "0.95rem" }}>
            My Earnings
          </Text>
          <Button shape="circle" size="small">
            <i className="fas fa-arrow-right" />
          </Button>
        </Space>
        <Space direction="vertical" align="center" style={{ marginBottom: 40 }}>
          <Text strong style={{ color: "orange", fontSize: "1rem" }}>
            This week
          </Text>
          <Text style={{ fontSize: "3rem", color: "#555" }}>$340.50</Text>
        </Space>
        <List
          dataSource={earningData}
          itemSize={80}
          height={240}
          width="auto"
          component={EarningListItem}
          card
        />
      </MobileLayout>
    </Space>
  );
};

EarningDemo.parameters = {};
