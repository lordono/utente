# `@lieinapril/utente-tag`

> `Neumorphism` Tag for categorizing or markup.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente-tag
```

## Usage

```JSX
import { Tag } from '@lieinapril/utente-tag';

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
