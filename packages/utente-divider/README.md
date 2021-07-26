# `@lieinapril/utente-divider`

> Neumorphism - A divider line separates different content.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

```bash
npm install @lieinapril/utente-divider
```

## Usage

```JSX
import { Divider } from '@lieinapril/utente-divider';

const Example = () => {

  return (
    <div
    style={{
      width: "calc(100% - 6rem)",
      maxWidth: 800,
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: "#eeeeee"
    }}
  >
    <div>
      <Divider {...args} />
      <span>Something</span>
      <Divider {...args} />
      <span>Something</span>

      <Divider {...args} />
      <span>Something</span>
    </div>
  </div>
  );
}
```
