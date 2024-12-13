const hexToRgb = (hex: string) => {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
};

const rgbToHex = (r: number, g: number, b: number) => {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

function isWhiteSpectrum(hexColor: string, tolerance: number = 175): boolean {
  hexColor = hexColor.replace("#", "");

  const red: number = parseInt(hexColor.substring(0, 2), 16);
  const green: number = parseInt(hexColor.substring(2, 4), 16);
  const blue: number = parseInt(hexColor.substring(4, 6), 16);

  return (
    red >= 255 - tolerance &&
    green >= 255 - tolerance &&
    blue >= 255 - tolerance
  );
}

export const generateGradientFromColor = (
  baseColor: string,
  steps: number = 12
) => {
  if (steps < 3) throw new Error("Gradient needs to contain at least 3 steps");
  const rgbBase = hexToRgb(baseColor);
  const gradient = [];

  const isCloseToWhite = isWhiteSpectrum(baseColor);

  const colorRange = isCloseToWhite ? 1 : 255;
  const factorMultiplier = isCloseToWhite ? 1 : 1;

  for (let i = 0; i < steps; i++) {
    const factor = i / (steps - 1);

    let r = Math.round(
      rgbBase[0] + (colorRange - rgbBase[0]) * factor * factorMultiplier
    );
    let g = Math.round(
      rgbBase[1] + (colorRange - rgbBase[1]) * factor * factorMultiplier
    );
    let b = Math.round(
      rgbBase[2] + (colorRange - rgbBase[2]) * factor * factorMultiplier
    );

    if (baseColor === "#000000") {
      r = Math.round(255 * factor);
      g = Math.round(255 * factor);
      b = Math.round(255 * factor);
    }
    if (baseColor === "#FFFFFF") {
      r = Math.round(255 - 255 * factor);
      g = Math.round(255 - 255 * factor);
      b = Math.round(255 - 255 * factor);
    }

    gradient.push(rgbToHex(r, g, b));
  }

  return gradient.slice(0, steps - 1);
};
