import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

const Steps = props => {
  const {
    children,
    dotStyle,
    variant,
    initial,
    current,
    size,
    status,
    onChange,
    direction
  } = props;

  const ref = React.useRef(null);

  // active step
  const [currentStep, setCurrentStep] = React.useState(current || initial);

  // change key
  const changeStep = newStep => {
    if (newStep !== currentStep) {
      setCurrentStep(newStep);
      onChange(newStep);
    }
  };

  // check for size
  React.useEffect(() => {
    ref.current.style.cssText = `
      --stepSize: ${size}px;
      --halfStepSize: ${size / 2}px;
      --stepFontSize: ${size / 2.25}px;
    `;
  }, [size]);

  // clone children with activeKey props
  const childrenWithProps = React.Children.map(children, (child, num) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        status:
          currentStep > num ? "finish" : currentStep === num ? status : "wait",
        step: num + 1,
        variant,
        size,
        direction,
        dotStyle,
        changeStep
      });
    }
    return child;
  });

  const classes = cx(
    styles.stepwrapper,
    direction === "horizontal" && styles.horizontal,
    direction === "vertical" && styles.vertical,
    variant === "fill" && styles.filled,
    variant === "simple" && styles.simple
  );

  return (
    <div className={classes} ref={ref}>
      {childrenWithProps}
    </div>
  );
};

Steps.defaultProps = {
  variant: "fill",
  initial: 0,
  current: 0,
  size: 42,
  status: "process",
  dotStyle: false,
  direction: "horizontal"
};

Steps.propTypes = {
  /**
   * variant type of element
   */
  variant: PropTypes.oneOf(["fill", "shadow"]),
  /**
   * direction of element
   */
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  /**
   * current number of element
   */
  current: PropTypes.number,
  /**
   * dotStyle of element
   */
  dotStyle: PropTypes.bool,
  /**
   * initial number of element
   */
  initial: PropTypes.number,
  /**
   * size of element
   */
  size: PropTypes.number,
  /**
   * status of element
   */
  status: PropTypes.oneOf(["process", "error"]),
  /**
   * additional styles for element
   */
  style: PropTypes.object,
  /**
   * additional classes for element
   */
  className: PropTypes.string,
  /**
   * onChange function for element
   */
  onChange: PropTypes.func
};

export default Steps;
