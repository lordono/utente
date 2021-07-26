import React from "react";
import cx from "clsx";
import styles from "./styles.css";

/**
 * Base for Text/Title/Paragraph
 */
const Base = props => {
  const {
    theme,
    component,
    code,
    deleted,
    disabled,
    ellipsis,
    keyboard,
    mark,
    strong,
    italic,
    underline,
    className,
    style,
    ref,
    children,
    ...rest
  } = props;

  function wrapperDecorations(
    { mark, code, underline, deleted: del, strong, keyboard, italic },
    content
  ) {
    let currentContent = content;

    function wrap(needed, tag) {
      if (!needed) return;

      currentContent = React.createElement(tag, {}, currentContent);
    }

    wrap(strong, "strong");
    wrap(underline, "u");
    wrap(del, "del");
    wrap(code, "code");
    wrap(mark, "mark");
    wrap(keyboard, "kbd");
    wrap(italic, "i");

    return currentContent;
  }

  // wrapper decorations
  let textNode = children;

  textNode = wrapperDecorations(props, textNode);

  const classes = cx(
    styles.utente_typography,
    theme === "dark" && styles.dark,
    className
  );

  return React.createElement(
    component,
    { className: classes, style, ref, ...rest },
    textNode
  );
};

export default Base;
