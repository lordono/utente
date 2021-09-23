import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";
import { parseMenuList } from "./misc";

const Menu = props => {
  const {
    children,
    variant,
    onChange,
    selectedKey = "",
    defaultActiveKey,
    direction
  } = props;

  // get menuItems
  const menuItems = parseMenuList(children);

  // active tab
  const [activeKey, setActiveKey] = React.useState(
    defaultActiveKey || menuItems[0]?.key
  );

  // change key
  const changeKey = newKey => {
    if (newKey !== activeKey) {
      setActiveKey(newKey);
      onChange(newKey);
    }
  };

  // look out for new tabpanes
  React.useEffect(() => {
    if (!activeKey && menuItems.length > 0) {
      if (menuItems[0]?.key) setActiveKey(menuItems[0]?.key);
    }
  }, [activeKey]);

  // clone children with activeKey props
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        active: selectedKey
          ? selectedKey === child.key
          : activeKey === child.key,
        value: child.key,
        variant,
        direction,
        changeKey
      });
    }
    return child;
  });

  const classes = cx(
    styles.menuwrapper,
    direction === "horizontal" && styles.horizontal,
    variant === "fill" && styles.filled,
    variant === "simple" && styles.simple,
    variant === "shadow" && styles.shadowed
  );

  return <div className={classes}>{childrenWithProps}</div>;
};

Menu.defaultProps = {
  variant: "fill",
  direction: "vertical"
};

Menu.propTypes = {
  /**
   * variant type of element
   */
  variant: PropTypes.oneOf(["simple", "fill", "shadow"]),
  /**
   * direction of element
   */
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  /**
   * additional styles for element
   */
  style: PropTypes.object,
  /**
   * active item's key
   */
  selectedKey: PropTypes.string,
  /**
   * Initial active item's key
   */
  defaultActiveKey: PropTypes.string,
  /**
   * additional classes for element
   */
  className: PropTypes.string,
  /**
   * onChange function for element
   */
  onChange: PropTypes.func
};

export default Menu;
