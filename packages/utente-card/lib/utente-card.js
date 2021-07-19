import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

/**
 * - Useful component to segment content
 * - Ignore CardWrapper: just a wrapper ReactNode in the examples
 */
const Card = ({
  children,
  contentClass,
  contentStyle,
  className,
  cover,
  hoverable,
  theme,
  padded,
  ...rest
}) => {
  const classes = cx(
    styles.card,
    { [styles.dark]: theme === "dark" },
    hoverable && styles.hoverable,
    className
  );

  const contentClasses = cx(padded && styles.padded, contentClass);
  return (
    <div {...rest} className={classes}>
      <div className={styles.cover}>{cover}</div>
      <div className={contentClasses} style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  theme: "light",
  hoverable: false,
  padded: true,
  cover: null,
  contentClass: ""
};

Card.propTypes = {
  /**
   * color theme
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * if card can be hovered
   */
  hoverable: PropTypes.bool,
  /**
   * if card should be padded - standard 20px
   */
  padded: PropTypes.bool,
  /**
   * cover for card, usually image
   */
  cover: PropTypes.node,
  /**
   * content-div class
   */
  contentClass: PropTypes.string,
  /**
   * content-div style
   */
  contentStyle: PropTypes.object,
  /**
   * wrapper-div class
   */
  className: PropTypes.string,
  /**
   * wrapper-div style
   */
  style: PropTypes.object
};

export { Card };
