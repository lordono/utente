import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";

import { Avatar } from "@lieinapril/utente-avatar";
import { Divider } from "@lieinapril/utente-divider";
import styles from "./styles.css";

/**
 * ## When to use
 * A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.
 *
 * ## How to use
 * - Refer to [react-window](https://github.com/bvaughn/react-window) for more information.
 */
const ListItem = ({ data, index, style }) => {
  const { items, theme, separator_size } = data;
  const item = items[index];

  const classes = cx(theme === "dark" && styles.dark, styles.listitem);

  const isString = typeof item === "string";
  if (isString) {
    return (
      <div className={classes} style={style}>
        {index !== 0 && (
          <Divider margin={0} size={separator_size} theme={theme} />
        )}
        <div className={styles.listitem_content}>
          <div className={styles.listitem_words_only}>
            <span className={styles.listitem_title}>{item}</span>
          </div>
        </div>
      </div>
    );
  } else {
    const avatarSrc = item?.avatar;

    return (
      <div className={classes} style={style}>
        {index !== 0 && (
          <Divider margin={0} size={separator_size} theme={theme} />
        )}
        <div className={styles.listitem_content}>
          {avatarSrc && (
            <Avatar theme={theme} shape="circle" src={item.avatar} />
          )}
          <div className={styles.listitem_words}>
            <div className={styles.listitem_title}>{item.title}</div>
            <div className={styles.listitem_desc}>{item.description}</div>
          </div>
        </div>
      </div>
    );
  }
};

ListItem.defaultProps = {
  data: {
    items: [],
    theme: "light"
  },
  index: 0,
  styles: {}
};

ListItem.propTypes = {
  /**
   * data and theme
   */
  data: PropTypes.shape({
    items: PropTypes.array,
    theme: PropTypes.oneOf(["light", "dark"])
  }),
  /**
   * index of the item
   */
  index: PropTypes.number,
  /**
   * wrapper-div style
   */
  style: PropTypes.object
};

export default ListItem;
