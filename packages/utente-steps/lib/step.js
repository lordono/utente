import React from "react";
import { Space } from "@lieinapril/utente-space";
import { Avatar } from "@lieinapril/utente-avatar";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

const Step = props => {
  const {
    status,
    step,
    size,
    dotStyle,
    variant,
    direction,
    title,
    description,
    children,
    className,
    active,
    icon,
    changeStep,
    ...rest
  } = props;
  const classes = cx(
    styles.stepitem,
    status && styles[status],
    direction && styles[direction],
    variant === "fill" && styles.filled,
    variant === "simple" && styles.simple,
    variant === "shadow" && styles.shadowed,
    className
  );

  const contentClasses = cx(styles.stepitem_object, styles.stepitem_content);

  const avatarProps = {};
  if (icon) avatarProps.icon = icon;
  else avatarProps.text = `${step}`;

  return (
    <div {...rest} className={classes}>
      <div className={styles.stepitem_tail} />
      <div className={styles.stepitem_icon}>
        {!dotStyle && (
          <Avatar
            shape="circle"
            variant={variant}
            width={size}
            muted={status === "wait"}
            {...avatarProps}
          />
        )}
        {dotStyle && <div className={styles.dot} />}
      </div>
      <div className={contentClasses}>
        <div className={styles.stepitem_title}>{title}</div>
        {description}
      </div>
    </div>
  );
};

Step.defaultProps = {};

Step.propTypes = {
  /**
   * additional styles for tab
   */
  style: PropTypes.object,
  /**
   * additional classes for tab
   */
  className: PropTypes.string
};

export default Step;
