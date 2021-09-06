import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PaginationItem from "./paginationitem";

/**
 * ## When to use
 * - When it will take a long time to load/render all items.
 * - If you want to browse the data by navigating through pages.
 */
const Pagination = props => {
  const ref = React.useRef(null);
  const {
    className,
    pageSize,
    total,
    defaultCurrent,
    current,
    size,
    variant,
    ...rest
  } = props;

  // checked state
  const [internalCurrent, setInternalCurrent] = React.useState(defaultCurrent);

  // number of pages
  const numPages = total && pageSize ? Math.ceil(total / pageSize) : 0;

  const controlled = typeof current === "number" && current > 0;
  const finalCurrent = controlled ? current : internalCurrent;

  const onClick = index => () => {
    setInternalCurrent(index);
  };

  React.useEffect(() => {
    if (size) {
      const mSize = 2 * size;
      ref.current.style.cssText = `
        --pageItemFontSize: ${mSize / 3}px;
        --pageItemHeight: ${mSize}px;
        --pageItemWidth: ${(mSize * 4) / 5}px;
        --pageItemBorder: ${mSize / 13}px;
      `;
    }
  }, [size]);

  return (
    <nav className={styles.page_nav} ref={ref} {...rest}>
      <ul className={styles.page_container}>
        {[...Array(numPages).keys()]
          .map(i => i + 1)
          .map(index => (
            <PaginationItem
              key={index}
              variant={variant}
              value={index}
              current={finalCurrent}
              onClick={onClick(index)}
            />
          ))}
      </ul>
    </nav>
  );
};

Pagination.defaultProps = {
  current: 0,
  defaultCurrent: 0,
  total: 0,
  pageSize: 0,
  variant: "fill",
  size: 19
};

Pagination.propTypes = {
  /**
   * type of element - border/fill/shadow
   */
  variant: PropTypes.oneOf(["border", "fill", "shadow"]),
  /**
   * current page number
   */
  current: PropTypes.number,
  /**
   * total number of items
   */
  total: PropTypes.number,
  /**
   * number of items in each page
   */
  pageSize: PropTypes.number,
  /**
   * default current page
   */
  defaultCurrent: PropTypes.number,
  /**
   * total number of items
   */
  total: PropTypes.number,
  /**
   * size of element
   */
  size: PropTypes.number,
  /**
   * class of element input
   */
  className: PropTypes.string,
  /**
   * style object of element input
   */
  style: PropTypes.object
};

export { Pagination };
