# `@lieinapril/utente-table`

> Neumorphism - A table displays rows of data.

## Documentation

Refer to the following [storybook](https://lordono.github.io/utente/).

## Installation

Install guide

```bash
npm install @lieinapril/utente-table
```

## Usage

```JSX
import React from 'react';
import { Table } from '@lieinapril/utente-table';

const Example = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World"
      },
      {
        col1: "react-table",
        col2: "rocks"
      },
      {
        col1: "whatever",
        col2: "you want"
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1" // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2"
      }
    ],
    []
  );
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Table
        theme="light"
        data={data}
        columns={columns}
        style={{ maxWidth: 800 }}
      />
    </div>
  );
}
```
