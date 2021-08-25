import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

const Footer = ({ className, variant, children, ...rest }) => {
  const classes = cx(
    styles.utente_footer,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    className
  );
  return (
    <footer className={classes} {...rest}>
      {children}
    </footer>
  );
};

Footer.defaultProps = {
  variant: "fill"
};

Footer.propTypes = {
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

export default Footer;
