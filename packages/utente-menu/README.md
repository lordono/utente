# `@lieinapril/utente-menu`

> Neumorphism - A versatile menu for navigation.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

```bash
npm install @lieinapril/utente-menu
```

## Usage

```JSX
import { Menu, MenuItem } from '@lieinapril/utente-menu';

const Example = () => {

  return (
    <div style={{ display: "flex", gap: 20, backgroundColor: "#eee" }}>
      <Menu variant="fill">
        <MenuItem key="content1" icon={<i className="fab fa-twitch" />}>
          Tab 1
        </MenuItem>
        <MenuItem key="content2" icon={<i className="fab fa-twitch" />}>
          Tab 2
        </MenuItem>
        <MenuItem key="content3" icon={<i className="fab fa-twitch" />}>
          Tab 3
        </MenuItem>
      </Menu>
    </div>
  );
}
```
