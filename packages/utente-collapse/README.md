# `@lieinapril/utente-collapse`

> Neumorphism - A content area which can be collapsed and expanded.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

```bash
npm install @lieinapril/utente-collapse
```

## Usage

```JSX
import { Collapse, Panel } from '@lieinapril/utente-collapse';

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
    <Collapse theme="light" accordion>
      <Panel theme="light" key="content1" header="This is panel header 1">
        Content 1
      </Panel>
      <Panel theme="light" key="content2" header="This is panel header 2">
        Content 2
      </Panel>
      <Panel theme="light" key="content3" header="This is panel header 3">
        Content 3
      </Panel>
    </Collapse>
  </div>
  );
}
```
