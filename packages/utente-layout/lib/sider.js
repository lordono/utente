import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

const Sider = () => {
  return <div>Sider</div>;
};

Sider.defaultProps = {
  variant: "fill",
  direction: "vertical"
};

Sider.propTypes = {
  /**
   * variant type of element
   */
  variant: PropTypes.oneOf(["simple", "fill", "shadow"]),
  /**
   * direction of element
   */
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  /**
   * additional styles for element
   */
  style: PropTypes.object,
  /**
   * Initial active item's key
   */
  defaultActiveKey: PropTypes.string,
  /**
   * additional classes for element
   */
  className: PropTypes.string,
  /**
   * onChange function for element
   */
  onChange: PropTypes.func
};

export default Sider;
