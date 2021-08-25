import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

/**
 * ## When to use
 * Avoid components clinging together and set a unified space.
 */
const Space = ({
  colored,
  children,
  direction,
  size,
  full,
  align,
  justify,
  wrap,
  className,
  px,
  py,
  w100,
  h100,
  style,
  ...rest
}) => {
  const classes = cx(
    styles.space,
    colored && styles.colored,
    direction === "vertical" && styles.vertical,
    wrap && styles.wrap,
    justify && styles[`justify-${justify}`],
    align && styles[`align-${align}`],
    className
  );

  const sizeStyle = size ? { gap: size } : {};
  const padStyle = { padding: `${py}px ${px}px` };
  const fullStyle = {};
  if (full || w100) fullStyle.width = "100%";
  if (full || h100) fullStyle.height = "100%";

  const spaceStyle = {
    ...sizeStyle,
    ...padStyle,
    ...fullStyle,
    ...style
  };

  return (
    <div {...rest} className={classes} style={spaceStyle}>
      {children}
    </div>
  );
};

Space.defaultProps = {
  direction: "horizontal",
  size: 8,
  align: "center",
  justify: "start",
  wrap: false,
  full: false,
  px: 0,
  py: 0,
  w100: false,
  h100: false
};

Space.propTypes = {
  /**
   * direction of the children
   */
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  /**
   * full width and height - good for creating flex containers
   */
  full: PropTypes.bool,
  /**
   * gap size between children
   */
  size: PropTypes.number,
  /**
   * vertical alignment of children
   */
  align: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "baseline",
    "space-between"
  ]),
  /**
   * horizontal alignment of children
   */
  justify: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "space-between",
    "space-around"
  ]),
  /**
   * for horizontal direction only - wraps children
   */
  wrap: PropTypes.bool,
  /**
   * wrapper-div class
   */
  className: PropTypes.string,
  /**
   * wrapper-div style
   */
  style: PropTypes.object
};

export { Space };
