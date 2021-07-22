import React from "react";
import { isFragment } from "react-is";

function toArray(children) {
  let ret = [];

  React.Children.forEach(children, child => {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });

  return ret;
}

export function parseList(children) {
  return toArray(children)
    .map(node => {
      if (React.isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined;
        return {
          key,
          ...node.props,
          node
        };
      }

      return null;
    })
    .filter(node => node);
}
