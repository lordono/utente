import React from "react";
import styles from "./styles.scss";
import cx from "clsx";

const PaginationItem = props => {
  const { value, current, variant, onClick } = props;

  const classes = cx(
    styles.page_item,
    variant === "border" && styles.page_bordered,
    variant === "shadow" && styles.page_shadowed,
    variant === "fill" && styles.page_filled,
    current === value && styles.page_selected
  );

  return (
    <li className={classes} title={value} tabIndex="0">
      <a className={styles.page_item_link} onClick={onClick}>
        {value}
      </a>
    </li>
  );
};

export default PaginationItem;
