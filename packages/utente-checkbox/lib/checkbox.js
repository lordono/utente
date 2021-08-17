import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

/**
 * - Used for selecting multiple values from several options.
 * - If you use only one checkbox, it is the same as using `Switch` to toggle between two states. The difference is that `Switch` will trigger the state change directly, but `Checkbox` just marks the state as changed and this needs to be submitted.
 */
const Checkbox = React.forwardRef((props, ref) => {
  const {
    className,
    children,
    checked,
    value,
    variant,
    onChange,
    onClick,
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

  // styling
  const classes = cx(
    styles.checkbox_container,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    variant === "border" && styles.bordered,
    focus && styles.focus,
    className
  );

  return (
    <label className={classes} {...rest}>
      {children}
      <input
        ref={ref}
        type="checkbox"
        value={value}
        label={value}
        onClick={clickInput}
        className={styles.input}
        checked={finalChecked}
        onChange={e => {
          onChange(e);
        }}
      />
      <span className={styles.checkmark} />
    </label>
  );
});

Checkbox.defaultProps = {
  checked: null
};

Checkbox.propTypes = {
  /**
   * type of element - shadow/fill/border
   */
  variant: PropTypes.oneOf(["shadow", "fill", "border"]),
  /**
   * value of checkbox
   */
  value: PropTypes.string,
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
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["null"])]),
  /**
   * onClick function when checkbox is clicked upon
   */
  onClick: PropTypes.func,
  /**
   * onChange function when checkbox change input
   */
  onChange: PropTypes.func
};

export default Checkbox;
