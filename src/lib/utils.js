export function deslugify(str) {
  return str
    .split("-")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export default {
  deslugify
};
