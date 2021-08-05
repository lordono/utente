import React from "react";
import PropTypes from "prop-types";
import { isValidColor, isLight, colorLuminance, getContrast } from "./misc";
import styles from "./styles.css";

const Theme = props => {
  const {
    children,
    color,
    secondaryColor,
    intensity = 0.15,
    distance = 5
  } = props;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!isValidColor(color)) {
      return;
    }
    const checkLight = isLight(color);
    const darkNumber = checkLight ? 1 : -1;
    const trueIntensity = checkLight ? intensity : intensity * 3.5;
    const colorIntensity = trueIntensity * darkNumber;
    const darkColor = colorLuminance(color, trueIntensity * -1);
    const lightColor = colorLuminance(color, trueIntensity);

    const lightSecondary = colorLuminance(secondaryColor, intensity);

    const firstGradientColor = colorLuminance(color, -0.67 * colorIntensity);
    const secondGradientColor = colorLuminance(color, 0.5 * colorIntensity);
    ref.current.style.cssText = `
      --baseColor: ${color};
      --distance: ${distance}px;
      --textColor: ${getContrast(color)};
      --muteColor: ${checkLight ? darkColor : lightColor};
      --secondaryTextColor: ${getContrast(secondaryColor)};
      --textColorOpposite: ${color};
      --secondaryColor: ${secondaryColor};
      --lightSecondary: ${lightSecondary};
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
