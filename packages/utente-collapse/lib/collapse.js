import React from "react";
import PropTypes from "prop-types";

/**
 * - Can be used to group or hide complex regions to keep the page clean.
 * - `Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time.
 */
const Collapse = props => {
  const {
    children,
    className,
    onChange = null,
    defaultActiveKey,
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
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        active: activeKey.includes(child.key),
        identifier: child.key,
        changeKey
      });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

Collapse.defaultProps = {
  theme: "light",
  accordion: false,
  defaultActiveKey: [],
  onChange: null
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
   * Initial active Panel's key e.g. ["example1"]
   */
  defaultActiveKey: PropTypes.arrayOf(PropTypes.string),
  /**
   * onChange function for collapse
   */
  onChange: PropTypes.func
};

export default Collapse;
