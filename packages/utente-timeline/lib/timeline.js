import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

/**
 * ## When to use
 * - When a series of information needs to be ordered by time (ascending or descending).
 * - When you need a timeline to make a visual connection.
 */
const Timeline = props => {
  const { children, variant, mode, size, style, ...rest } = props;

  // clone children with activeKey props
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        variant,
        mode,
        size,
        index
      });
    }
    return child;
  });

  const fontStyle = size ? { fontSize: size } : {};

  const inlineStyles = {
    ...fontStyle,
    ...style
  };

  const classes = cx(
    styles.timelinewrapper,
    variant === "fill" && styles.filled,
    variant === "border" && styles.bordered,
    variant === "shadow" && styles.shadowed
  );

  return (
    <ul className={classes} style={inlineStyles} {...rest}>
      {childrenWithProps}
    </ul>
  );
};

Timeline.defaultProps = {
  variant: "fill",
  size: 12
};

Timeline.propTypes = {
  /**
   * mode of element
   */
  mode: PropTypes.oneOf(["left", "right", "alternate"]),
  /**
   * size of element
   */
  size: PropTypes.number,
  /**
   * variant type of element
   */
  variant: PropTypes.oneOf(["fill", "shadow", "border"]),
  /**
   * additional styles for element
   */
  style: PropTypes.object,
  /**
   * additional classes for element
   */
  className: PropTypes.string
};

export default Timeline;
