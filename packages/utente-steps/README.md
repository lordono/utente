# `@lieinapril/utente-steps`

> Neumorphism - `Steps` is a navigation bar that guides users through the steps of a task.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

```bash
npm install @lieinapril/utente-steps
```

## Usage

```JSX
import { Steps, Step } from '@lieinapril/utente-steps';

const Example = () => {
  const args = { theme: "light", size: "small" };

  return (
    <div style={{ display: "flex", gap: 10, backgroundColor: "#eee" }}>
      <Tag {...args}>Article</Tag>
      <Tag {...args}>Electronics</Tag>
      <Tag {...args}>5G</Tag>
    </div>
  );
}
```
