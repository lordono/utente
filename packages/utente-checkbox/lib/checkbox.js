import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

const Checkbox = React.forwardRef((props, ref) => {
  const {
    className,
    checked,
    label,
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
      <input ref={ref} type="checkbox" checked={checked} />
      <span className={styles.checkmark} />
    </label>
  );
});

Checkbox.defaultProps = {
  theme: "light",
  size: "medium"
};

Checkbox.propTypes = {
  /**
   * color theme
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * size of the checkbox
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * style of checkbox
   */
  style: PropTypes.object,
  /**
   * class of checkbox
   */
  className: PropTypes.string,
  /**
   * state of checkbox
   */
  checked: PropTypes.oneOf([null, "checked"]),
  /**
   * onFocus function when checkbox is focused
   */
  onFocus: PropTypes.func,
  /**
   * onBlur function when checkbox is off-focused
   */
  onBlur: PropTypes.func,
  /**
   * onClick function when checkbox is clicked upon
   */
  onClick: PropTypes.func
};

export default Checkbox;