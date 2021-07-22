import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

const TabPane = React.forwardRef((props, ref) => {
  const { children, className, active, theme, ...rest } = props;
  const classes = cx(
    styles.tabpane,
    active && styles.active,
    theme === "dark" && styles.dark,
    className
  );
  return (
    <div {...rest} ref={ref} className={classes}>
      {children}
    </div>
  );
});

const { oneOf } = PropTypes;

TabPane.defaultProps = {
  theme: "light"
};

TabPane.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * additional styles for tab
   */
  style: PropTypes.object,
  /**
   * additional classes for tab
   */
  className: PropTypes.string
};

export default TabPane;
