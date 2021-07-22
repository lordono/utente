import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

const Panel = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    header,
    active,
    changeKey,
    theme,
    ...rest
  } = props;
  const classes = cx(
    styles.panel,
    active && styles.active,
    theme === "dark" && styles.dark,
    className
  );
  return (
    <div {...rest} ref={ref} className={classes}>
      <div className={styles.separator} />
      <div
        className={styles.collapse_icon}
        onClick={() => changeKey(props.identifier)}
      />
      <div className={styles.header}>{header}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
});

const { oneOf } = PropTypes;

Panel.defaultProps = {
  theme: "light"
};

Panel.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * additional styles for tab
   */
  style: PropTypes.object,
  /**
   * additional classes for tab
   */
  className: PropTypes.string
};

export default Panel;
