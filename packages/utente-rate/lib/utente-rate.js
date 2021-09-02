import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import RateItem from "./rateitem";

/**
 * ## When to use
 * - Show evaluation.
 * - A quick rating operation on something.
 */
const Rate = props => {
  const ref = React.useRef(null);
  const {
    className,
    shape,
    count,
    allowClear,
    readOnly,
    value,
    size,
    variant,
    ...rest
  } = props;

  // checked state
  const [focus, setFocus] = React.useState(false);
  const [hoverValue, setHoverValue] = React.useState(value);
  const [current, setCurrent] = React.useState(value);

  const finalChecked = focus ? hoverValue : current;

  const onContainerFocus = () => setFocus(true);
  const onContainerBlur = () => {
    setFocus(false);
    setHoverValue(current);
  };

  const onRateHover = index => () => {
    if (!readOnly) setHoverValue(index);
  };
  const onRateClick = () => {
    if (!readOnly && focus) {
      if (allowClear && current === hoverValue) {
        setCurrent(0);
        setHoverValue(0);
        setFocus(false);
        return;
      }
      setCurrent(hoverValue);
    }
  };

  React.useEffect(() => {
    if (size) {
      const mSize = 2 * size;
      ref.current.style.cssText = `
        --rateSize: ${mSize}px;
        --rateGap: ${0.3 * mSize}px;
      `;
    }
  }, [size]);

  const classes = cx(styles.rate_container, readOnly && styles.rate_readonly);

  return (
    <div
      className={classes}
      ref={ref}
      onMouseEnter={onContainerFocus}
      onMouseLeave={onContainerBlur}
      onClick={onRateClick}
      {...rest}
    >
      {[...Array(count).keys()]
        .map(i => i + 1)
        .map(rate => (
          <RateItem
            key={rate}
            shape={shape}
            variant={variant}
            value={rate}
            checked={finalChecked >= rate}
            onHover={onRateHover(rate)}
          />
        ))}
    </div>
  );
};

Rate.defaultProps = {
  count: 5,
  shape: "star",
  allowClear: false,
  value: 1,
  variant: "fill",
  size: 20,
  readOnly: false
};

Rate.propTypes = {
  /**
   * type of element - border/fill
   */
  variant: PropTypes.oneOf(["border", "fill", "shadow"]),
  /**
   * shape of element
   */
  shape: PropTypes.oneOf(["star", "heart"]),
  /**
   * current rating value
   */
  value: PropTypes.number,
  /**
   * number of rating objects
   */
  count: PropTypes.number,
  /**
   * allow clearing via click
   */
  allowClear: PropTypes.bool,
  /**
   * size of element
   */
  size: PropTypes.number,
  /**
   * define rating to be fixed
   */
  readOnly: PropTypes.bool,
  /**
   * class of element input
   */
  className: PropTypes.string,
  /**
   * style object of element input
   */
  style: PropTypes.object
};

export { Rate };
