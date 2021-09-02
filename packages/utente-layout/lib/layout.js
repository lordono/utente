import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

/**
 * ## Component Overview
 * - `Layout`: The layout wrapper, in which `Header` `Sider` `Content` `Footer` or `Layout` itself can be nested, and can be placed in any parent container.
 * - `Header`: The top layout with the default style, in which any element can be nested, and must be placed in `Layout`.
 * - `Sider`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in `Layout`.
 * - `Content`: The content layout with the default style, in which any element can be nested, and must be placed in `Layout`.
 * - `Footer`: The bottom layout with the default style, in which any element can be nested, and must be placed in `Layout`.
 */
const Layout = ({ className, variant, children, ...rest }) => {
  const [hasSider, setHasSider] = React.useState(false);

  React.useEffect(() => {
    if (children) {
      let checkSider = false;
      React.Children.forEach(children, child => {
        if (React.isValidElement(child) && child.type.name === "Sider") {
          checkSider = true;
        }
      });
      setHasSider(checkSider);
    }
  }, [children]);

  const classes = cx(
    styles.utente_layout,
    hasSider && styles.has_sider,
    variant === "fill" && styles.filled,
    variant === "shadow" && styles.shadowed,
    className
  );

  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
};

Layout.defaultProps = {
  variant: "fill"
};

Layout.propTypes = {
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

export default Layout;
