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
    isTextArea,
    rows,
    resize,
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

  const textAreaWrapClasses = cx(
    styles.textarea_wrap,
    focus && styles.focus,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    variant === "border" && styles.bordered
  );

  const inputClasses = cx(
    !isTextArea && styles.input,
    isTextArea && size && styles[size],
    isTextArea && resize && styles[resize]
  );

  const inputProps = {
    ...rest,
    className: inputClasses,
    ref,
    ...controlledValueProps,
    onChange: e => onChange(e),
    onFocus: () => {
      setFocus(true);
      if (onFocus) onFocus();
    },
    onBlur: () => {
      setFocus(false);
      if (onBlur) onBlur();
    }
  };

  if (isTextArea) {
    return (
      <div className={textAreaWrapClasses}>
        <textarea
          {...inputProps}
          style={style}
          rows={rows}
          wrap="hard"
          cols="10"
          maxLength={10 * rows}
        />
      </div>
    );
  } else {
    return (
      <label className={classes} style={style}>
        {prefix}
        <input {...inputProps} />
        {suffix}
      </label>
    );
  }
});

Input.defaultProps = {
  variant: "fill",
  size: "medium",
  isTextArea: false,
  rows: 10,
  resize: "both"
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
   * icon prefix for input only. e.g \<i className="fas fa-search" />
   */
  prefix: PropTypes.node,
  /**
   * icon suffix for input only e.g \<i className="fas fa-search"/>
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
  onFocus: PropTypes.func,
  /**
   * specify to be a textarea
   */
  isTextArea: PropTypes.bool,
  /**
   * number of rows for textarea
   */
  rows: PropTypes.number,
  /**
   * resize type
   */
  resize: PropTypes.oneOf(["both", "vertical", "horizontal"])
};

export default Input;
