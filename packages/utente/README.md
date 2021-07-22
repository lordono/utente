# `@lieinapril/utente`

> Neumorphism - A new age take on Skeumorphism.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente
```

## Components available

- Input
- Avatar
- Switch
- Tab/TabPane
- Button
- Card
- Modal
- Collapse
- Radio
- Switch
- Tag
- Text
- Checkbox

## Usage

```JSX
import { Avatar, Button } from '@lieinapril/utente';

const Example = () => {
  const args = {
    theme: "light",
    size: "medium",
    shape: "square",
    indented: false
  };

  const imgSrc = "https://randomuser.me/api/portraits/women/21.jpg";

  return (
    <div style={{ display: "flex", gap: 20, backgroundColor: "#eee" }}>
      <Button>Hello World!</Button>
      <Avatar {...args} text="U" />
      <Avatar {...args} text="US" />
      <Avatar {...args} text="USE" />
      <Avatar {...args} text="USERS" />
      <Avatar {...args} src={imgSrc} />
      <Avatar {...args} icon={<i className="fas fa-search"></i>} />
    </div>
  );
}
```
