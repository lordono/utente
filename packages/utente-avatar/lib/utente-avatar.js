import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

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
    size,
    theme,
    ...rest
  } = props;
  const classes = cx(
    styles.avatar,
    theme === "dark" && styles.dark,
    shape === "circle" && styles.circle,
    indented && styles.indented,
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
  theme: "light",
  size: "medium",
  indented: false,
  shape: "square"
};

Avatar.propTypes = {
  /**
   * color theme
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * size of the Avatar
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
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
