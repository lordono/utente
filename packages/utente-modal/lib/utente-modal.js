import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.css";

/**
 * When requiring users to interact with the application, but without jumping to a new page
 * and interrupting the user's workflow, you can use `Modal` to create a new floating layer
 * over the current page to get user feedback or display information.
 */
const Modal = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    onCancel,
    onOk,
    visible,
    size,
    theme,
    ...rest
  } = props;

  const commonClasses = [
    visible && styles.visible,
    theme === "dark" && styles.dark
  ];
  const maskClasses = cx(styles.modal_mask, commonClasses);
  const wrapClasses = cx(styles.modal_wrap, commonClasses);
  const classes = cx(
    styles.modal,
    commonClasses,
    size && styles[size],
    className
  );
  return (
    <>
      <div className={maskClasses} onClick={onCancel} />
      <div className={wrapClasses}>
        <div {...rest} ref={ref} className={classes}>
          <div className={styles.closable} onClick={onCancel} />
          {children}
        </div>
      </div>
    </>
  );
});

const { oneOf } = PropTypes;

Modal.defaultProps = {
  theme: "light",
  size: "medium"
};

Modal.propTypes = {
  /**
   * color theme
   */
  theme: oneOf(["light", "dark"]),
  /**
   * size of the modal
   */
  size: oneOf(["small", "medium", "large"]),
  /**
   * state of modal's visibility
   */
  visible: PropTypes.bool,
  /**
   * additional styles for modal
   */
  style: PropTypes.object,
  /**
   * additional classes for modal
   */
  className: PropTypes.string,
  /**
   * onCancel function for modal when you press close icon
   */
  onCancel: PropTypes.func
};

export { Modal };
