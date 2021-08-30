# `@lieinapril/utente-progress`

> Neumorphism - Display the current progress of an operation flow.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

```bash
npm install @lieinapril/utente-progress
```

## Usage

```JSX
import { Progress } from '@lieinapril/utente-progress';

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
    <Timeline variant="shadow" size={14}>
      <TimelineItem>Create a services site 2015-09-01</TimelineItem>
      <TimelineItem
          color="danger"
          icon={<i className="fas fa-calendar-minus" />}
      >
          Solve initial network problems 2015-09-01
      </TimelineItem>
      <TimelineItem color="warning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo
        voluptatem recusandae officiis consequuntur mollitia quidem eos
        ipsa sapiente facilis nemo laboriosam, cupiditate vitae
        voluptatibus aspernatur provident est error id?
      </TimelineItem>
    </Timeline>
  </div>
  );
}
```
