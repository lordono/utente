import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

const Input = React.forwardRef((props, ref) => {
  const [focus, setFocus] = React.useState(false);

  const {
    className,
    prefix,
    suffix,
    size,
    theme,
    style,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const classes = cx(
    styles.input_container,
    prefix && styles.prefix,
    suffix && styles.suffix,
    {
      [styles.dark]: theme === "dark"
    },
    size && styles[size],
    focus && styles.focus,
    className
  );

  return (
    <div className={classes} style={style}>
      {prefix}
      <input
        {...rest}
        className={styles.input}
        ref={ref}
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
    </div>
  );
});

Input.defaultProps = {
  theme: "light",
  size: "medium"
};

Input.propTypes = {
  /**
   * color theme
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * size of the input
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * icon prefix for input. e.g \<i class="fas fa-search" />
   */
  prefix: PropTypes.node,
  /**
   * icon suffix for input e.g \<i class="fas fa-search"/>
   */
  suffix: PropTypes.node,
  /**
   * class of the input
   */
  className: PropTypes.string,
  /**
   * style of input
   */
  style: PropTypes.object
};

export default Input;
