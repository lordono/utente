import React from "react";
import { Modal, Paragraph, Title, Space } from "../../../lib/utente";

const contentStyle = {
  overflowY: "auto",
  padding: "0 20px",
  height: "100%"
};

const modalStyle = {
  height: "70%",
  fontSize: "0.85rem"
};

export const RedditModal = props => {
  const { item, isVisible, onCancel } = props;
  return (
    <Modal
      onCancel={onCancel}
      visible={isVisible}
      size="large"
      style={modalStyle}
    >
      <Space
        direction="vertical"
        style={contentStyle}
        align="start"
        justify="start"
        full
      >
        <Title lvl={2}>{item.title}</Title>
        <Title lvl={3}>Pitch</Title>
        <Paragraph>{item.pitch}</Paragraph>
        <Title lvl={3}>Problem</Title>
        <Paragraph>{item.problem}</Paragraph>
        <Title lvl={3}>Solution</Title>
        <Paragraph>{item.solution}</Paragraph>
        <Title lvl={3}>Market</Title>
        <Paragraph>{item.market}</Paragraph>
      </Space>
    </Modal>
  );
};
