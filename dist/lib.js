function e(n) {
  return n != null;
}
function r(n) {
  return n == null;
}
function t(n, i) {
  return e(n) ? n : i;
}
function f(...n) {
  for (const i of n)
    if (e(i)) return i;
}
function o(n) {
  if (!e(n))
    throw new Error("Value is not defined");
}
export {
  o as assertDefined,
  t as defaultValue,
  f as firstDefined,
  e as isDefined,
  r as isNotDefined
};
