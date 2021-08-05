import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

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
    margin,
    width,
    variant,
    ...rest
  } = props;
  const classes = cx(
    styles.divider,
    variant === "shadow" && styles.shadowed,
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

Divider.defaultProps = {
  variant: "fill",
  size: 6,
  margin: 10,
  width: "100%",
  type: "horizontal"
};

Divider.propTypes = {
  /**
   * type of element - shadow/fill
   */
  variant: PropTypes.oneOf(["shadow", "fill"]),
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
  width: PropTypes.string
};

export { Divider };
