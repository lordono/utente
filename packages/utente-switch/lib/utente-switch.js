import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

/**
 * - If you need to represent the switching between two states or on-off state.
 * - The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.
 */
const Switch = React.forwardRef((props, ref) => {
  const {
    className,
    onClick,
    onChange,
    checked,
    label,
    value,
    size,
    theme,
    ...rest
  } = props;

  const classes = cx(
    styles.switch_container,
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
        type="checkbox"
        checked={checked}
        value={value}
        label={label}
        onClick={onClick}
        onChange={onChange}
      />
      <span className={styles.checkmark}>
        <span className={styles.circlemark} />
      </span>
    </label>
  );
});

const { oneOf } = PropTypes;

Switch.defaultProps = {
  theme: "light",
  size: "medium"
};

Switch.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * label of switch input
   */
  label: PropTypes.string,
  /**
   * value of switch input
   */
  value: PropTypes.string,
  /**
   * class of switch input
   */
  className: PropTypes.string,
  /**
   * style object of switch input
   */
  style: PropTypes.object,
  /**
   * onchange function when you toggle input
   */
  onChange: PropTypes.func,
  /**
   * onclick function when you click input
   */
  onClick: PropTypes.func
};

export { Switch };
