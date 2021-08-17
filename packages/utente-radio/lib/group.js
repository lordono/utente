import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { parseRadioChildren } from "./misc";

const RadioGroup = props => {
  const { children, onChange, value, defaultValue } = props;

  // get radios
  const radios = parseRadioChildren(children);

  // active radio
  const [activeValue, setActiveValue] = React.useState(
    defaultValue || radios[0]?.value
  );

  // name of group
  const [name, setName] = React.useState(null);
  React.useEffect(() => {
    if (!name) {
      setName(nanoid());
    }
  }, []);

  // change value
  function changeValue(e) {
    const newValue = e.target.value;
    if (newValue !== activeValue) {
      setActiveValue(newValue);
      onChange(newValue);
    }
  }

  // look out for new radios
  React.useEffect(() => {
    if (!activeValue && radios.length > 0) {
      if (radios[0]?.value) setActiveValue(radios[0]?.value);
    }
  }, [activeValue]);

  // set controlled form
  React.useEffect(() => {
    if (value && value !== activeValue) setActiveValue(value);
  }, [value]);

  // clone children with activeValue props
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type.name === "Radio") {
      return React.cloneElement(child, {
        checked: activeValue === child.props.value,
        name,
        onChange: changeValue
      });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

RadioGroup.defaultProps = {
  defaultValue: null,
  onChange: () => null
};

RadioGroup.propTypes = {
  /**
   * Initial active RadioGroup's value
   */
  defaultValue: PropTypes.any,
  /**
   * RadioGroup's current value
   */
  value: PropTypes.any,
  /**
   * onChange function for tab
   */
  onChange: PropTypes.func
};

export default RadioGroup;
