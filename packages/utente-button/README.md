# `@lieinapril/utente-button`

> Neumorphism - To trigger an operation.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente-button
```

## Usage

```JSX
import { Button } from '@lieinapril/utente-button';

const Example = () => {
  const args = { theme: "light", size: "medium" };

  return (
    <div style={{ display: "flex", gap: 20, backgroundColor: "#eee" }}>
      <Button {...args}>Hello Button</Button>
      <Button {...args} selected={true}>
        Selected Button
      </Button>
    </div>
  );
}
```
