import React from "react";
// We want to always get from source
import { Modal } from "../lib/utente-modal";
import { Button } from "@lieinapril/utente-button";

export default {
  title: "Feedback/Modal",
  component: Modal,
  parameters: {
    componentSubtitle: "Modal dialogs."
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" }
    },
    className: {
      control: false
    },
    visible: {
      control: false
    }
  }
};

export const Primary = args => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const onToggle = () => setIsModalVisible(e => !e);
  return (
    <div
      style={{
        width: "calc(100% - 6rem)",
        height: "calc(100% - 6rem)",
        padding: "3rem",
        backgroundColor: "#eeeeee"
      }}
    >
      <div style={{ display: "flex", gap: 20 }}>
        <Button onClick={onToggle} theme={args.theme}>
          Open Modal
        </Button>
        <Modal {...args} onCancel={onToggle} visible={isModalVisible}>
          <div>Some content...</div>
          <div>Some content...</div>
          <div>Some content...</div>
        </Modal>
      </div>
    </div>
  );
};

Primary.args = {
  size: "medium"
};
