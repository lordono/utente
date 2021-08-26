import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

/**
 * - Can be used to group or hide complex regions to keep the page clean.
 * - `Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time.
 */
const Collapse = props => {
  const {
    children,
    className,
    onChange = null,
    separator_size,
    defaultActiveKey,
    card,
    accordion,
    theme,
    ...rest
  } = props;

  // active tab
  const [activeKey, setActiveKey] = React.useState(defaultActiveKey);

  React.useEffect(() => {
    if (accordion) {
      if (activeKey.length > 1) setActiveKey(activeKey.slice(0, 1));
    }
  }, [accordion, activeKey]);

  // change key
  const changeKey = newKey => {
    const index = activeKey.indexOf(newKey);
    let newActiveKey = activeKey.slice();
    if (index > -1) newActiveKey.splice(index, 1);
    else newActiveKey.unshift(newKey);
    setActiveKey(newActiveKey);
    if (onChange) onChange(newActiveKey);
  };

  // clone children with activeKey props
  const childrenWithProps = React.Children.map(children, (child, idx) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        active: activeKey.includes(child.key),
        identifier: child.key,
        separator_size,
        changeKey,
        idx
      });
    }
    return child;
  });

  if (card) {
    const cardClasses = cx(
      styles.collapse_card,
      theme === "dark" && styles.dark
    );
    return <div className={cardClasses}>{childrenWithProps}</div>;
  } else {
    return <>{childrenWithProps}</>;
  }
};

Collapse.defaultProps = {
  theme: "light",
  accordion: false,
  defaultActiveKey: [],
  onChange: null,
  separator_size: 2,
  card: false
};

Collapse.propTypes = {
  /**
   * color theme
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * enable `Accordion` mode
   */
  accordion: PropTypes.bool,
  /**
   * enable `Card` styles
   */
  card: PropTypes.bool,
  /**
   * separator height
   */
  separator_size: PropTypes.number,
  /**
   * Initial active Panel's key e.g. ["example1"]
   */
  defaultActiveKey: PropTypes.arrayOf(PropTypes.string),
  /**
   * onChange function for collapse
   */
  onChange: PropTypes.func
};

export default Collapse;
