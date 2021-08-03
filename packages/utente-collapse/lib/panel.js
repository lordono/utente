import React from "react";
import PropTypes from "prop-types";
import { Divider } from "@lieinapril/utente-divider";
import cx from "clsx";
import styles from "./styles.css";

const Panel = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    idx = 0,
    header,
    separator_size,
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
      {idx !== 0 && <Divider margin={0} size={separator_size} theme={theme} />}
      <div className={styles.header_wrapper}>
        <div
          className={styles.collapse_icon}
          onClick={() => changeKey(props.identifier)}
        />
        <div className={styles.header}>{header}</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
});

const { oneOf } = PropTypes;

Panel.defaultProps = {
  theme: "light",
  separator_size: 2
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
