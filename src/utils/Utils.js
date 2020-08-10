export const clipText = (text, limit) => {
  if (text.length >= limit) {
    text = text.substring(0, limit - 2).concat('. . .');
  }
  return text;
};
