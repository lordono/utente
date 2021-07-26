# `@lieinapril/utente-radio`

> Neumorphism - Radio.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

```bash
npm install @lieinapril/utente-radio
```

## Usage

```JSX
import { Radio } from '@lieinapril/utente-radio';

const Example = () => {
  const args = {
    theme: "light"
  };

  return (
    <div style={{ display: "flex", gap: 20, backgroundColor: "#eee" }}>
      <Radio {...args} size="small" label="One" name="example1" />
      <Radio {...args} size="small" label="Two" name="example1" />
      <Radio {...args} size="small" label="Three" name="example1" />
    </div>
  );
}
```
