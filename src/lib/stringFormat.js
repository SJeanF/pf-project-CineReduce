export const maxString = (string, maxCount = 20) => {
  if (string.length > maxCount) {
    return `${string.slice(0, maxCount)}...`;
  }
  return string;
};

export const dotToComma = (num) => num.toString().replace(".", ",");
