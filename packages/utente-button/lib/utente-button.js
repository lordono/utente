import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

const Button = React.forwardRef((props, ref) => {
  const { children, className, selected, size, theme, ...rest } = props;
  const classes = cx(
    styles.button,
    {
      [styles.dark]: theme === "dark"
    },
    {
      [styles[size]]: size
    },
    selected && styles.selected,
    className
  );
  return (
    <button {...rest} ref={ref} className={classes}>
      {children}
    </button>
  );
});

const { oneOf } = PropTypes;

Button.defaultProps = {
  theme: "light",
  size: "medium"
};

Button.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * size of the button
   */
  size: oneOf(["small", "medium", "large"]),
  /**
   * additional styles for button
   */
  style: PropTypes.object,
  /**
   * additional classes for button
   */
  className: PropTypes.string,
  /**
   * onClick function for button
   */
  onClick: PropTypes.func
};

export { Button };
