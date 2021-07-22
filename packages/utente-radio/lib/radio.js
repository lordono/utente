import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

/**
 * - Used to select a single state from multiple options.
 * - The difference from `Select` is that `Radio` is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.
 */
const Radio = React.forwardRef((props, ref) => {
  const {
    className,
    checked,
    label,
    name,
    value,
    size,
    theme,
    onClick,
    onChange,
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
      <input
        ref={ref}
        type="radio"
        checked={checked}
        name={name}
        value={value}
        onClick={onClick}
        onChange={onChange}
      />
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
   * label of radio input
   */
  label: PropTypes.string,
  /**
   * value of radio input
   */
  value: PropTypes.string,
  /**
   * class of radio input
   */
  className: PropTypes.string,
  /**
   * style of radio input
   */
  style: PropTypes.object,
  /**
   * onchange function when you change selection
   */
  onChange: PropTypes.func
};

export default Radio;
