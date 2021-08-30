import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

/**
 * ## When To Use
 * If it will take a long time to complete an operation, you can use `Progress` to show the current progress and status.
 * - When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.
 * - When you need to display the completion percentage of an operation.
 */
const Progress = React.forwardRef((props, ref) => {
  const { max, value, className, size, variant, ...rest } = props;

  const shadowed = variant === "shadow";
  const classes = cx(
    styles.progress,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    variant === "border" && styles.bordered,
    className
  );

  const innerStyle = {
    height: size
  };

  const padded = shadowed ? size / 2 : 0;
  const valueStyle = {
    width: `calc(${(value * 100) / max}% - ${padded}px)`,
    left: shadowed ? `${padded}px` : 0,
    height: shadowed ? size * 0.4 : size
  };

  return (
    <div {...rest} ref={ref} className={classes}>
      <div className={styles.progress_outer}>
        <div className={styles.progress_inner} style={innerStyle}>
          <div className={styles.progress_bg} style={valueStyle} />
        </div>
      </div>
    </div>
  );
});

Progress.defaultProps = {
  variant: "fill",
  size: 20
};

Progress.propTypes = {
  /**
   * max value of progress
   */
  max: PropTypes.string,
  /**
   * current value of progress
   */
  value: PropTypes.string,
  /**
   * type of element - shadow/fill/border
   */
  variant: PropTypes.oneOf(["shadow", "fill", "border"]),
  /**
   * size of the element
   */
  size: PropTypes.number,
  /**
   * additional styles for element
   */
  style: PropTypes.object,
  /**
   * additional classes for element
   */
  className: PropTypes.string,
  /**
   * onClick function for element
   */
  onClick: PropTypes.func
};

export { Progress };
