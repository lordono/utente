import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

/**
 * A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
 */
const Button = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    selected,
    shape,
    size,
    variant,
    ...rest
  } = props;
  const classes = cx(
    styles.button,
    size && styles[size],
    selected && styles.selected,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    variant === "border" && styles.bordered,
    shape === "circle" && styles.circle,
    className
  );
  return (
    <button {...rest} ref={ref} className={classes}>
      {children}
    </button>
  );
});

Button.defaultProps = {
  variant: "fill",
  size: "medium",
  shape: "square"
};

Button.propTypes = {
  /**
   * type of button - shadow/fill/border
   */
  variant: PropTypes.oneOf(["shadow", "fill", "border"]),
  /**
   * size of the button
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * shape of the button
   */
  shape: PropTypes.oneOf(["square", "circle"]),
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
