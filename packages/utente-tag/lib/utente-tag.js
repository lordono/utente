import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

/**
 * - It can be used to tag by dimension or property.
 * - When categorizing.
 */
const Tag = React.forwardRef((props, ref) => {
  const { children, className, size, theme, ...rest } = props;
  const classes = cx(
    styles.tag,
    theme === "dark" && styles.dark,
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
  theme: "light",
  size: "small"
};

Tag.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * size of the tag
   */
  size: oneOf(["small", "medium", "large"]),
  /**
   * additional styles for tag
   */
  style: PropTypes.object,
  /**
   * additional classes for tag
   */
  className: PropTypes.string
};

export { Tag };
