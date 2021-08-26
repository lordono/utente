import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

const TimelineItem = props => {
  const {
    mode,
    index,
    color,
    size,
    variant,
    children,
    style,
    className,
    type,
    icon,
    ...rest
  } = props;

  const borderWidth = Math.min(size / 6, 6);
  const shadowed = variant === "shadow";
  const iconSize = shadowed ? size * 0.85 : size;
  const goodSize = shadowed ? size * 1.5 : size;

  // consider alternate mode
  const altTrue = mode === "alternate";
  const altLeft = mode === "alternate" && index % 2 === 0;
  const altRight = mode === "alternate" && index % 2 === 1;

  // consider right mode
  const modeRight = mode === "right";

  const classes = cx(
    styles.timelineitem,
    styles[color],
    variant === "fill" && styles.filled,
    variant === "border" && styles.bordered,
    variant === "simple" && styles.simple,
    variant === "shadow" && styles.shadowed,
    className
  );

  const itemStyle = {
    paddingBottom: size * 1.5,
    ...style
  };

  const headStyle = {
    left: altTrue ? "50%" : modeRight ? `calc(100% - ${goodSize}px)` : 0,
    width: goodSize,
    height: goodSize,
    borderWidth
  };

  const iconStyle = {
    left: altTrue ? "50%" : modeRight ? `calc(100% - ${goodSize}px)` : 0,
    fontSize: iconSize,
    width: goodSize,
    height: goodSize
  };

  const tailLeft = goodSize / 2 - borderWidth / 2;
  const tailRight = goodSize / 2 + borderWidth / 2;
  const tailLeftPercent = altTrue ? 50 : modeRight ? 100 : 0;
  const tailStyle = {
    left: modeRight
      ? `calc(${tailLeftPercent}% - ${tailRight}px)`
      : `calc(${tailLeftPercent}% + ${tailLeft}px)`,
    top: size,
    borderLeftWidth: borderWidth
  };

  const contentStyle = {
    left: altLeft ? "50%" : 0,
    textAlign: altRight || modeRight ? "right" : "left",
    width: altTrue
      ? `calc(50% - ${shadowed ? size * 2.5 : size * 2}px)`
      : modeRight
      ? `calc(100% - ${2.8 * goodSize}px)`
      : `calc(100% - ${goodSize}px)`,
    lineHeight: `${goodSize + 2}px`,
    margin: `0 0 0 ${shadowed ? size * 2 : size * 1.5}px`
  };

  return (
    <li className={classes} style={itemStyle} {...rest}>
      <div className={styles.timelinetail} style={tailStyle} />
      {icon && (
        <div className={styles.timelineicon} style={iconStyle}>
          {icon}
        </div>
      )}
      {!icon && <div className={styles.timelinehead} style={headStyle} />}
      <div className={styles.timelinecontent} style={contentStyle}>
        {children}
      </div>
    </li>
  );
};

TimelineItem.defaultProps = {
  color: "info"
};

TimelineItem.propTypes = {
  /**
   * color of element
   */
  color: PropTypes.oneOf(["muted", "success", "danger", "warning", "info"]),
  /**
   * additional styles for tab
   */
  style: PropTypes.object,
  /**
   * additional classes for tab
   */
  className: PropTypes.string
};

export default TimelineItem;
