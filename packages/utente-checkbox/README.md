# `@lieinapril/utente-checkbox`

> `Neumorphism` Checkbox component.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente-checkbox
```

## Usage

```JSX
import { Checkbox } from '@lieinapril/utente-checkbox';

const Example = () => {
  const args = {
    theme: "light"
  };

  return (
    <div style={{ display: "flex", gap: 20, backgroundColor: "#eee" }}>
      <Checkbox {...args} size="small" label="Apple" />
      <Checkbox {...args} size="small" label="Orange" />
      <Checkbox {...args} size="small" label="Pear" />
    </div>
  );
}
```
