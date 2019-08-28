// helper function for create different scales of the hex color
export function hexToRgbA(hex, alpha = 1) {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
}
