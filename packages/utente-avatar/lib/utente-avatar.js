import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

/**
 * - only can display either text, image or icon
 * - precedence goes to text, image then icon
 */
const Avatar = React.forwardRef((props, ref) => {
  const {
    className,
    text,
    src,
    icon,
    shape,
    indented,
    surface,
    size,
    variant,
    ...rest
  } = props;
  const classes = cx(
    styles.avatar,
    shape === "circle" && styles.circle,
    indented && styles.indented,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    variant === "border" && styles.bordered,
    surface === "convex" && styles.convex,
    surface === "concave" && styles.concave,
    size && styles[size],
    className
  );
  let rendered = null;
  if (text) {
    rendered = <span>{text}</span>;
  } else if (src) {
    rendered = <img src={src} alt="rendered" />;
  } else if (icon) {
    rendered = icon;
  }
  return (
    <div {...rest} ref={ref} className={classes}>
      {rendered}
    </div>
  );
});

Avatar.defaultProps = {
  variant: "fill",
  size: "medium",
  indented: false,
  shape: "square",
  surface: "normal"
};

Avatar.propTypes = {
  /**
   * type of button - shadow/fill/border
   */
  variant: PropTypes.oneOf(["shadow", "fill", "border"]),
  /**
   * size of the Avatar
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * element surface
   */
  surface: PropTypes.oneOf(["normal", "convex", "concave"]),
  /**
   * text inside avatar
   */
  text: PropTypes.string,
  /**
   * icon inside vatar
   */
  icon: PropTypes.node,
  /**
   * image inside avatar (image-url)
   */
  src: PropTypes.string,
  /**
   * determine if it's indented or not
   */
  indented: PropTypes.bool,
  /**
   * determine if it's indented or not
   */
  shape: PropTypes.oneOf(["square", "circle"]),
  /**
   * additional styles for avatar
   */
  style: PropTypes.object,
  /**
   * additional classes for avatar
   */
  className: PropTypes.string
};

export { Avatar };
