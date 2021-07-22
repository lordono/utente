import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";
import { parseTabList } from "./utils";

const Tab = React.forwardRef((props, ref) => {
  const { children, className, size, theme, ...rest } = props;

  // active tab
  const [activeTab, setActiveTab] = React.useState(0);

  // get tabs
  const tabs = parseTabList(children);

  const classes = cx(
    styles.button,
    theme === "dark" && styles.dark,
    size && styles[size],
    className
  );

  console.log(tabs);

  return (
    <div {...rest} ref={ref} className={classes}>
      {children}
    </div>
  );
});

const { oneOf } = PropTypes;

Tab.defaultProps = {
  theme: "light",
  size: "medium"
};

Tab.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * size of the tab
   */
  size: oneOf(["small", "medium", "large"]),
  /**
   * additional styles for tab
   */
  style: PropTypes.object,
  /**
   * additional classes for tab
   */
  className: PropTypes.string,
  /**
   * onClick function for tab
   */
  onClick: PropTypes.func
};

export default Tab;
