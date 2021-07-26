# `@lieinapril/utente-tab`

> Neumorphism - Tabs make it easy to switch between different views.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

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
    <div style={{ backgroundColor: "#eeeeee" }}>
      <Tab {...args}>
        <TabPane {...args} key="content1" tab="Tab 1">
          content 1
        </TabPane>
        <TabPane {...args} key="content2" tab="Tab 2">
          content 2
        </TabPane>
        <TabPane {...args} key="content3" tab="Tab 3">
          content 3
        </TabPane>
      </Tab>
    </div>
  );
}
```
