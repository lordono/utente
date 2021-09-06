import React from "react";
import cx from "clsx";
import styles from "../styles.scss";

const HeartBorder = props => {
  const { checked, onHover, onClick } = props;

  const classes = cx(
    checked && styles.rate_checked,
    styles.rate_icon,
    styles.rate_border
  );
  return (
    <svg
      enableBackground="new 0 0 24 24"
      className={classes}
      viewBox="0 0 24 24"
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <path d="m22.128 3.901c-1.21-1.226-2.819-1.901-4.532-1.901s-3.321.675-4.531 1.9l-1.065 1.08-1.065-1.079c-1.21-1.226-2.819-1.901-4.531-1.901-1.713 0-3.322.675-4.532 1.901-2.491 2.524-2.491 6.631 0 9.153l9.594 9.722c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c2.491-2.523 2.491-6.629 0-9.154z" />
      <path d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c2.491-2.523 2.491-6.63 0-9.154-1.21-1.226-2.819-1.901-4.532-1.901s-3.321.675-4.531 1.9l-1.065 1.08-1.065-1.079c-1.21-1.226-2.819-1.901-4.531-1.901-1.713 0-3.322.675-4.532 1.901-2.491 2.524-2.491 6.631 0 9.153zm-8.527-17.822c.926-.937 2.157-1.454 3.464-1.454 1.308 0 2.538.517 3.463 1.455l1.599 1.62c.281.285.786.285 1.067 0l1.599-1.621c.928-.937 2.158-1.454 3.465-1.454 1.308 0 2.538.517 3.464 1.454 1.917 1.943 1.917 5.104 0 7.048l-9.06 9.181-9.061-9.182c-1.917-1.942-1.917-5.104 0-7.047z" />
    </svg>
  );
};

export default HeartBorder;