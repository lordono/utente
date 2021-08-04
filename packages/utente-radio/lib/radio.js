import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

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
    variant,
    onClick,
    onChange,
    ...rest
  } = props;

  const classes = cx(
    styles.radio_container,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    variant === "border" && styles.bordered,
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
  variant: "fill",
  size: "medium"
};

Radio.propTypes = {
  /**
   * type of element - shadow/fill/border
   */
  variant: PropTypes.oneOf(["shadow", "fill", "border"]),
  /**
   * size of the element
   */
  size: oneOf(["small", "medium", "large"]),
  /**
   * name of element group
   */
  name: PropTypes.string,
  /**
   * label of element input
   */
  label: PropTypes.string,
  /**
   * value of element input
   */
  value: PropTypes.string,
  /**
   * class of element input
   */
  className: PropTypes.string,
  /**
   * style of element input
   */
  style: PropTypes.object,
  /**
   * onchange function when you change selection
   */
  onChange: PropTypes.func
};

export default Radio;
