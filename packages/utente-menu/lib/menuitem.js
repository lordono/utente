import React from "react";
import { Space } from "@lieinapril/utente-space";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

const MenuItem = props => {
  const {
    value,
    variant,
    direction,
    children,
    className,
    active,
    icon,
    changeKey,
    ...rest
  } = props;
  const classes = cx(
    styles.menuitem,
    active && styles.active,
    direction && styles[direction],
    variant === "fill" && styles.filled,
    variant === "simple" && styles.simple,
    variant === "shadow" && styles.shadowed,
    className
  );
  return (
    <Space
      {...rest}
      className={classes}
      px={17.5}
      py={17.5}
      size={15}
      align="center"
      onClick={() => changeKey(value)}
    >
      {icon && icon}
      {children}
    </Space>
  );
};

MenuItem.defaultProps = {};

MenuItem.propTypes = {
  /**
   * additional styles for tab
   */
  style: PropTypes.object,
  /**
   * additional classes for tab
   */
  className: PropTypes.string
};

export default MenuItem;
