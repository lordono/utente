# `@lieinapril/utente-list`

> Neumorphism - Simple List.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

```bash
npm install @lieinapril/utente-list
```

## Usage

```JSX
import React from 'react';
import { List, ListItem } from '@lieinapril/utente-list';

const simple_data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

export const Example = args => {
  const data = React.useMemo(() => simple_data, [simple_data]);
  return (
    <div styles={{ backgroundColor: "#eee" }}>
      <List
        theme="light"
        dataSource={data}
        itemSize={65}
        height={200}
        width={400}
        component={ListItem}
      />
    </div>
  );
};
```
