import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

const Collapse = React.forwardRef((props, ref) => {
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
    <div {...rest} ref={ref} className={classes}>
      {children}
    </div>
  );
});

const { oneOf } = PropTypes;

Collapse.defaultProps = {
  theme: "light",
  size: "medium"
};

Collapse.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * size of the collapse
   */
  size: oneOf(["small", "medium", "large"]),
  /**
   * additional styles for collapse
   */
  style: PropTypes.object,
  /**
   * additional classes for collapse
   */
  className: PropTypes.string,
  /**
   * onClick function for collapse
   */
  onClick: PropTypes.func
};

export { Collapse };
