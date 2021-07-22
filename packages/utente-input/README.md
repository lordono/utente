# `@lieinapril/utente-input`

> `Neumorphism` A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente-input
```

## Usage

```JSX
import { Input } from '@lieinapril/utente-input';

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
