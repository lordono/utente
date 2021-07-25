import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

/**
 * ## When to use
 * - Divide sections of article.
 * - Divide inline text and links such as the operation column of table.
 */
const Divider = React.forwardRef((props, ref) => {
  const {
    children,
    style,
    className,
    size,
    type,
    margin,
    width,
    theme,
    ...rest
  } = props;
  const classes = cx(
    styles.divider,
    {
      [styles.dark]: theme === "dark"
    },
    className
  );

  const dividerStyle = {
    height: size,
    margin: `${margin}px 0`,
    width,
    ...style
  };

  return (
    <div className={styles.divider_wrapper}>
      <div {...rest} ref={ref} className={classes} style={dividerStyle}>
        {children}
      </div>
    </div>
  );
});

const { oneOf } = PropTypes;

Divider.defaultProps = {
  theme: "light",
  size: 4,
  margin: 10,
  width: "100%",
  type: "horizontal"
};

Divider.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * additional styles for button
   */
  style: PropTypes.object,
  /**
   * additional classes for button
   */
  className: PropTypes.string,
  /**
   * size of the divider
   */
  size: PropTypes.number,
  /**
   * vertical margin of divider
   */
  margin: PropTypes.number,
  /**
   * percentage width of the divider
   */
  width: PropTypes.string,
  /**
   * direction of divider
   */
  type: PropTypes.oneOf(["horizontal", "vertical"])
};

export { Divider };
