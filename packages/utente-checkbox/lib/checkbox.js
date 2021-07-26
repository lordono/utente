import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

/**
 * - Used for selecting multiple values from several options.
 * - If you use only one checkbox, it is the same as using `Switch` to toggle between two states. The difference is that `Switch` will trigger the state change directly, but `Checkbox` just marks the state as changed and this needs to be submitted.
 */
const Checkbox = React.forwardRef((props, ref) => {
  const {
    className,
    checked,
    label,
    value,
    theme,
    onChange,
    onClick,
    ...rest
  } = props;

  const [internalChecked, setInternalChecked] = React.useState(false);

  const classes = cx(
    styles.checkbox_container,
    {
      [styles.dark]: theme === "dark"
    },
    focus && styles.focus,
    className
  );

  const controlled = typeof checked === "boolean";
  const finalChecked = controlled ? checked : internalChecked;

  const clickInput = () => {
    if (!controlled) setInternalChecked(e => !e);
    if (onClick) onClick();
  };

  return (
    <label className={classes} {...rest}>
      {label}
      <input
        ref={ref}
        type="checkbox"
        value={value}
        label={label}
        onClick={clickInput}
        onChange={onChange}
        className={styles.input}
        checked={finalChecked}
      />
      <span className={styles.checkmark} />
    </label>
  );
});

Checkbox.defaultProps = {
  theme: "light",
  checked: null
};

Checkbox.propTypes = {
  /**
   * color theme
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * label of checkbox
   */
  label: PropTypes.string,
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
