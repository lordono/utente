# `@lieinapril/utente-layout`

> Neumorphism - a rate component.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

```bash
npm install @lieinapril/utente-rate
```

## Usage

```JSX
import { Space } from "@lieinapril/utente-space";
import { Rate } from '@lieinapril/utente-rate';

const Example = () => {
  const args = {
    value: 1,
    readOnly: false,
    allowClear: false,
    variant: "shadow",
    shape: "star",
    size: 20,
    count: 5
  };
  return (
    <div
      style={{
        width: "calc(100% - 6rem)",
        height: "calc(100% - 6rem)",
        padding: "3rem",
        backgroundColor: "#eeeeee"
      }}
    >
      <Space justify="center" align="center" gap={16}>
        <Rate {...args} />
      </Space>
    </div>
  );
}
```
