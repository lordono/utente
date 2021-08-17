import React from "react";
import PropTypes from "prop-types";
import { inputToRGB } from "@ctrl/tinycolor";
import { isValidColor, isLight, colorLuminance, getContrast } from "./misc";
import generate from "./generate";
import styles from "./styles.css";

const Theme = props => {
  const {
    children,
    color,
    secondaryColor,
    colorDanger,
    colorWarning,
    colorSuccess,
    intensity = 0.15,
    distance = 5
  } = props;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!isValidColor(color)) {
      return;
    }
    const checkLight = isLight(color);
    const rgb = inputToRGB(color);
    const darkNumber = checkLight ? 1 : -1;
    const trueIntensity = checkLight ? intensity : intensity * 3.5;
    const colorIntensity = trueIntensity * darkNumber;
    const darkColor = colorLuminance(color, trueIntensity * -1);
    const lightColor = colorLuminance(color, trueIntensity);
    const mildLightColor = colorLuminance(color, trueIntensity * 0.5);
    const mildDarkColor = colorLuminance(color, trueIntensity * -0.5);

    // secondary colors
    const secColors = generate(secondaryColor);

    const firstGradientColor = colorLuminance(color, -0.67 * colorIntensity);
    const secondGradientColor = colorLuminance(color, 0.5 * colorIntensity);
    ref.current.style.cssText = `
      --baseColor: ${color};
      --transBaseColor: rgba(${rgb.r},${rgb.g},${rgb.b}, 0.95);
      --distance: ${distance}px;
      --textColor: ${getContrast(color)};
      --textColorOpposite: ${color};
      --colorDanger: ${colorDanger};
      --colorWarning: ${colorWarning};
      --colorSuccess: ${colorSuccess};
      --lightMuteColor: ${checkLight ? mildDarkColor : mildLightColor};
      --muteColor: ${checkLight ? darkColor : lightColor};
      --secondaryTextColor: ${getContrast(secondaryColor)};
      --secondaryColor1: ${secColors[0]};
      --secondaryColor2: ${secColors[1]};
      --secondaryColor3: ${secColors[2]};
      --secondaryColor4: ${secColors[3]};
      --secondaryColor5: ${secColors[4]};
      --secondaryColor: ${secColors[5]};
      --secondaryColor7: ${secColors[6]};
      --secondaryColor8: ${secColors[7]};
      --secondaryColor9: ${secColors[8]};
      --secondaryColor10: ${secColors[9]};
      --darkColor: ${darkColor};
      --lightColor: ${lightColor};
      --firstGradientColor: ${firstGradientColor};
      --secondGradientColor: ${secondGradientColor};
      --positionX: var(--distance);
      --positionY: var(--distance);
      --positionYOpposite: calc(-1 * var(--distance));
      --positionXOpposite: calc(-1 * var(--distance));
      --angle: 145deg;
      --blur: calc(var(--distance) * 2);
    `;
  }, [color, intensity, distance]);
  return (
    <div ref={ref} className={styles.theme}>
      {children}
    </div>
  );
};

Theme.defaultProps = {
  color: "#eeeeee",
  secondaryColor: "#1890ff",
  colorDanger: "#f5222d",
  colorWarning: "#fa8c16",
  colorSuccess: "#52c41a",
  intensity: 0.15,
  distance: 5
};

Theme.propTypes = {
  /**
   * base color
   */
  color: PropTypes.string,
  /**
   * secondary color
   */
  secondaryColor: PropTypes.string,
  /**
   * intensity of the base color gradients
   */
  intensity: PropTypes.number,
  /**
   * box-shadow distance for neumorphism
   */
  distance: PropTypes.number
};

export { Theme };
