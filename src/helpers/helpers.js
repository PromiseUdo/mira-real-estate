export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

export const currencyFormatter = (value) => {
  if (value >= 1000000) {
    return "₦" + (value / 1000000)?.toFixed(0) + "M";
  } else if (value >= 1000) {
    return "₦" + (value / 1000)?.toFixed(0) + "K";
  } else {
    return value?.toString();
  }
};
