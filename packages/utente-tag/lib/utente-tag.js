import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

/**
 * - It can be used to tag by dimension or property.
 * - When categorizing.
 */
const Tag = React.forwardRef((props, ref) => {
  const { children, className, size, hoverable, variant, ...rest } = props;
  const classes = cx(
    styles.tag,
    hoverable && styles.hoverable,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    variant === "border" && styles.bordered,
    size && styles[size],
    className
  );
  return (
    <div {...rest} ref={ref} className={classes}>
      {children}
    </div>
  );
});

const { oneOf } = PropTypes;

Tag.defaultProps = {
  variant: "fill",
  size: "small"
};

Tag.propTypes = {
  /**
   * variant of element
   */
  variant: oneOf(["fill", "shadow", "border"]),
  /**
   * size of the element
   */
  size: oneOf(["small", "medium", "large"]),
  /**
   * allow element to be hoverable
   */
  hoverable: PropTypes.bool,
  /**
   * additional styles for element
   */
  style: PropTypes.object,
  /**
   * additional classes for element
   */
  className: PropTypes.string
};

export { Tag };
