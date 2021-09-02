import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

const Sider = ({ className, variant, children, ...rest }) => {
  const classes = cx(
    styles.utente_sider,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    className
  );
  return (
    <aside className={classes} {...rest}>
      {children}
    </aside>
  );
};

Sider.defaultProps = {
  variant: "fill"
};

Sider.propTypes = {
  /**
   * variant type of element
   */
  variant: PropTypes.oneOf(["fill", "shadow"]),
  /**
   * additional styles for element
   */
  style: PropTypes.object,
  /**
   * additional classes for element
   */
  className: PropTypes.string
};

export default Sider;
