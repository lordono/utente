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

export function parseRadioChildren(children) {
  return toArray(children)
    .map(node => {
      if (React.isValidElement(node) && node.type.name === "Radio") {
        const value = node.value !== undefined ? String(node.value) : undefined;
        return {
          value,
          ...node.props,
          node
        };
      }

      return null;
    })
    .filter(radio => radio);
}
