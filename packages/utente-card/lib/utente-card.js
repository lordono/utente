import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

/**
 * - A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.
 * - Ignore CardWrapper: just a wrapper ReactNode in the examples
 */
const Card = ({
  children,
  contentClass,
  contentStyle,
  className,
  cover,
  hoverable,
  variant,
  padded,
  ...rest
}) => {
  const classes = cx(
    styles.card,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    variant === "border" && styles.bordered,
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
  variant: "fill",
  hoverable: false,
  padded: true,
  cover: null,
  contentClass: ""
};

Card.propTypes = {
  /**
   * type of element - shadow/fill/border
   */
  variant: PropTypes.oneOf(["shadow", "fill", "border"]),
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
