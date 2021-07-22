# `@lieinapril/utente-avatar`

> `Neumorphism` Avatars can be used to represent people or objects. It supports images, icons or letters.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente-avatar
```

## Usage

```JSX
import { Avatar } from '@lieinapril/utente-avatar';

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
