# `@lieinapril/utente-space`

> Set components spacing.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

```bash
npm install @lieinapril/utente-space
```

## Usage

```JSX
import { Checkbox } from '@lieinapril/utente-checkbox';
import { Space } from '@lieinapril/utente-space';

const Example = () => {
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
        <Checkbox theme="light" size="small" label="Apple" value="apple" />
        <Checkbox theme="light" size="small" label="Orange" value="orange" />
        <Checkbox theme="light" size="small" label="Pear" value="pear" />
      </Space>
    </div>
  );
}
```
