import React from "react";
import cx from "clsx";
import Shadow from "../shadow";
import styles from "../styles.scss";

const HeartShadow = props => {
  const { checked, onHover, onClick } = props;

  const classes = cx(
    checked && styles.rate_checked,
    styles.rate_icon,
    styles.rate_shadow
  );
  return (
    <svg
      enableBackground="new 0 0 24 24"
      className={classes}
      viewBox="0 0 24 24"
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <Shadow />
      <path
        filter="url(#inset-shadow)"
        d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z"
      />
    </svg>
  );
};

export default HeartShadow;
