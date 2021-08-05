import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

/**
 * - A user input in a form field is needed.
 * - A search input is required.
 */
const Input = React.forwardRef((props, ref) => {
  const [focus, setFocus] = React.useState(false);

  const {
    className,
    prefix,
    suffix,
    size,
    value,
    variant,
    style,
    onChange,
    onFocus,
    onBlur,
    ...rest
  } = props;

  // checked state
  const controlled = typeof value === "string";
  const controlledValueProps = controlled ? { value } : {};

  const classes = cx(
    styles.input_container,
    prefix && styles.prefix,
    suffix && styles.suffix,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    variant === "border" && styles.bordered,
    size && styles[size],
    focus && styles.focus,
    className
  );

  return (
    <label className={classes} style={style}>
      {prefix}
      <input
        {...rest}
        className={styles.input}
        ref={ref}
        {...controlledValueProps}
        onChange={e => onChange(e)}
        onFocus={() => {
          setFocus(true);
          if (onFocus) onFocus();
        }}
        onBlur={() => {
          setFocus(false);
          if (onBlur) onBlur();
        }}
      />
      {suffix}
    </label>
  );
});

Input.defaultProps = {
  variant: "fill",
  size: "medium"
};

Input.propTypes = {
  /**
   * type of element - shadow/fill/border
   */
  variant: PropTypes.oneOf(["shadow", "fill", "border"]),
  /**
   * size of the input
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * icon prefix for input. e.g \<i className="fas fa-search" />
   */
  prefix: PropTypes.node,
  /**
   * icon suffix for input e.g \<i className="fas fa-search"/>
   */
  suffix: PropTypes.node,
  /**
   * class of the input
   */
  className: PropTypes.string,
  /**
   * style of input
   */
  style: PropTypes.object,
  /**
   * function when input changes
   */
  onChange: PropTypes.func,
  /**
   * function when input is off focus
   */
  onBlur: PropTypes.func,
  /**
   * function when focus on input
   */
  onFocus: PropTypes.func
};

export default Input;
