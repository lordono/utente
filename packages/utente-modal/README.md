# `@lieinapril/utente-modal`

> Neumorphism - Modal dialogs.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente-modal
```

## Usage

```JSX
import React from 'react';
import { Button } from '@lieinapril/utente-button';
import { Modal } from '@lieinapril/utente-modal';

const Example = () => {
  const args = { theme: "light", size: "medium" };
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const onToggle = () => setIsModalVisible(e => !e);

  return (
    <div style={{ display: "flex", gap: 20, backgroundColor: "#eee" }}>
      <Button onClick={onToggle}>
        Open Modal
      </Button>
      <Modal {...args} onCancel={onToggle} visible={isModalVisible}>
        <div>Some content...</div>
        <div>Some content...</div>
        <div>Some content...</div>
      </Modal>
    </div>
  );
}
```
