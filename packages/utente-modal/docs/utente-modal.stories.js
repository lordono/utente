import React from "react";
// We want to always get from source
import { Modal } from "../lib/utente-modal";
import { Button } from "@lieinapril/utente-button";

export default {
  title: "Basic/Modal",
  component: Modal,
  parameters: {
    componentSubtitle: "Modal dialogs."
  },
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    theme: {
      control: { type: "select", options: ["light", "dark"] }
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
        backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
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
  theme: "light",
  size: "medium"
};
