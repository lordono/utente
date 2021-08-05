import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

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
    variant,
    ...rest
  } = props;

  // checked state
  const [internalChecked, setInternalChecked] = React.useState(false);

  const controlled = typeof checked === "boolean";
  const finalChecked = controlled ? checked : internalChecked;

  const clickInput = e => {
    if (!controlled) setInternalChecked(z => !z);
    if (onClick) onClick(e);
  };

  const classes = cx(
    styles.switch_container,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
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
        checked={finalChecked}
        value={value}
        label={label}
        onClick={clickInput}
        onChange={onChange}
      />
      <span className={styles.checkmark}>
        <span className={styles.circlemark} />
      </span>
    </label>
  );
});

Switch.defaultProps = {
  variant: "fill",
  size: "medium",
  onChange: () => null
};

Switch.propTypes = {
  /**
   * type of element - shadow/fill
   */
  variant: PropTypes.oneOf(["shadow", "fill"]),
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
  onClick: PropTypes.func,
  /**
   * state of checkbox
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["null"])])
};

export { Switch };
