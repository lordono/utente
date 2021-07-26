import React from "react";
import PropTypes from "prop-types";
import AutoSizer from "react-virtualized-auto-sizer";

import { FixedSizeList as WindowedList } from "react-window";
import cx from "clsx";
import styles from "./styles.css";
import ListItem from "./listitem";

/**
 * ## When to use
 * A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.
 *
 * ## How to use
 * - Refer to [react-window](https://github.com/bvaughn/react-window) for more information.
 * - For auto-height and auto-width, you need to specify both height and width of parent element in order to use it.
 * - Refer to [react-virtualized-auto-sizer](https://github.com/bvaughn/react-window#can-a-list-or-a-grid-fill-100-the-width-or-height-of-a-page) for more information.
 */
const List = ({
  theme,
  height,
  width,
  itemSize,
  dataSource,
  component,
  className,
  children,
  ...rest
}) => {
  const classes = cx(styles.list, theme === "dark" && styles.dark, className);

  const Row = component || ListItem;

  const autoHeight = typeof height === "string" && height === "auto";
  const autoWidth = typeof width === "string" && width === "auto";

  if (autoHeight || autoWidth) {
    return (
      <AutoSizer>
        {({ height: ah, width: aw }) => (
          <WindowedList
            height={autoHeight ? ah : height}
            width={autoWidth ? aw : width}
            className={classes}
            itemSize={itemSize}
            itemCount={dataSource.length}
            itemData={{
              items: dataSource,
              theme
            }}
            {...rest}
          >
            {Row}
          </WindowedList>
        )}
      </AutoSizer>
    );
  } else {
    return (
      <WindowedList
        height={height}
        width={width}
        className={classes}
        itemSize={itemSize}
        itemCount={dataSource.length}
        itemData={{
          items: dataSource,
          theme
        }}
        {...rest}
      >
        {Row}
      </WindowedList>
    );
  }
};

List.defaultProps = {
  theme: "light",
  height: 500,
  width: 400,
  component: ListItem,
  itemSize: 50,
  dataSource: []
};

List.propTypes = {
  /**
   * color theme
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * height of list - either a number or "auto"
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * width of list - either a number or "auto"
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * height of each item
   */
  itemSize: PropTypes.number,
  /**
   * list data
   */
  dataSource: PropTypes.arrayOf(PropTypes.any),
  /**
   * react component for list item
   */
  component: PropTypes.any,
  /**
   * wrapper-div class
   */
  className: PropTypes.string,
  /**
   * wrapper-div style
   */
  style: PropTypes.object
};

export default List;
