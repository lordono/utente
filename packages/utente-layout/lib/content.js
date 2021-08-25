import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

const Content = ({ className, variant, children, ...rest }) => {
  const classes = cx(
    styles.utente_content,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    className
  );
  return (
    <main className={classes} {...rest}>
      {children}
    </main>
  );
};

Content.defaultProps = {
  variant: "fill"
};

Content.propTypes = {
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

export default Content;
