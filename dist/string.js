import { isDefined as n } from "./lib.js";
function i(e) {
  return !n(e) || e.length === 0 || e.length === 1 ? "" : e.charAt(0).toUpperCase() + e.slice(1);
}
function t(e) {
  return !n(e) || e.length === 0 ? "" : e.toUpperCase();
}
function u(e) {
  return !n(e) || e.length === 0 ? "" : e.toLowerCase();
}
function l(e) {
  return !n(e) || e.length === 0 || e.length === 1 ? "" : e.split("").reverse().join("");
}
export {
  u as allLowerCase,
  t as allUpperCase,
  i as capitalize,
  l as reverse
};
