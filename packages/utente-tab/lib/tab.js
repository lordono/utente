import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";
import { parseTabList } from "./utils";

const Tab = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    onChange,
    borderless,
    defaultActiveKey,
    theme,
    ...rest
  } = props;

  // get tabs
  const tabs = parseTabList(children);

  // active tab
  const [activeKey, setActiveKey] = React.useState(
    defaultActiveKey || tabs[0]?.key
  );

  // change key
  const changeKey = newKey => {
    if (newKey !== activeKey) {
      setActiveKey(newKey);
      onChange();
    }
  };

  // look out for new tabpanes
  React.useEffect(() => {
    if (!activeKey && tabs.length > 0) {
      if (tabs[0]?.key) setActiveKey(tabs[0]?.key);
    }
  }, [activeKey]);

  const classes = cx(
    styles.tablist,
    theme === "dark" && styles.dark,
    borderless && styles.borderless,
    className
  );

  // clone children with activeKey props
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { active: activeKey === child.key });
    }
    return child;
  });

  return (
    <div className={styles.tabwrapper}>
      <div {...rest} ref={ref} className={classes}>
        {tabs.map(tab => {
          const tabClasses = cx(
            styles.tabnode,
            theme === "dark" && styles.dark,
            activeKey === tab.key && styles.active
          );
          return (
            <div
              key={tab.key}
              className={tabClasses}
              onClick={() => changeKey(tab.key)}
            >
              {tab.tab}
            </div>
          );
        })}
      </div>
      {childrenWithProps}
    </div>
  );
});

const { oneOf } = PropTypes;

Tab.defaultProps = {
  theme: "light"
};

Tab.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * additional styles for tab
   */
  style: PropTypes.object,
  /**
   * Initial active TabPane's key
   */
  defaultActiveKey: PropTypes.string,
  /**
   * Initial active TabPane's key
   */
  borderless: PropTypes.bool,
  /**
   * additional classes for tab
   */
  className: PropTypes.string,
  /**
   * onChange function for tab
   */
  onChange: PropTypes.func
};

export default Tab;
