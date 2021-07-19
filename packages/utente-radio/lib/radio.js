import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

const Radio = React.forwardRef((props, ref) => {
  const {
    className,
    checked,
    label,
    name,
    size,
    theme,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const classes = cx(
    styles.container,
    {
      [styles.dark]: theme === "dark"
    },
    size && styles[size],
    focus && styles.focus,
    className
  );

  return (
    <label className={classes} {...rest}>
      {label}
      <input ref={ref} type="radio" checked={checked} name={name} />
      <span className={styles.checkmark}>
        <span className={styles.centermark} />
      </span>
    </label>
  );
});

const { oneOf } = PropTypes;

Radio.defaultProps = {
  theme: "light",
  size: "medium"
};

Radio.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * size of the radio
   */
  size: oneOf(["small", "medium", "large"]),
  /**
   * name of radio group
   */
  name: PropTypes.string,
  /**
   * class of radio input
   */
  className: PropTypes.string,
  /**
   * style of radio input
   */
  style: PropTypes.object
};

export default Radio;