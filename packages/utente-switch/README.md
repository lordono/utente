# `@lieinapril/utente-switch`

> `Neumorphism` Switching Selector.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente-switch
```

## Usage

```JSX
import { Switch } from '@lieinapril/utente-switch';

const Example = () => {
  const args = {
    theme: "light",
    label: "English"
  };

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Switch {...args} />
    </div>
  );
}
```
