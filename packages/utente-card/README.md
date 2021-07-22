# `@lieinapril/utente-card`

> Neumorphism - Simple rectangular container.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente-card
```

## Usage

```JSX
import { Card } from '@lieinapril/utente-card';

const Example = () => {
  const args = {
    theme: "light",
    hoverable: false,
    padded: true
  };

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Card {...args} style={{ width: 300, height: 300 }}>
        Standard Card
      </Card>
    </div>
  );
}
```
