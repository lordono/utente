# `@lieinapril/utente-tab`

> `Neumorphism` Tabs make it easy to switch between different views.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente-tab
```

## Usage

```JSX
import { Tab, TabPane } from '@lieinapril/utente-tab';

const Example = () => {
  const args = {
    theme: "light",
    size: "medium"
  };

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Input
        {...args}
        placeholder="Type to search..."
        style={{ width: 200 }}
        size="small"
        prefix={<i className="fas fa-search"></i>}
      />
    </div>
  );
}
```
