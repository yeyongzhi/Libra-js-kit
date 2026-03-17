import { isDefined as t } from "./lib.js";
function o(n) {
  return t(n) && typeof n == "string";
}
function r(n) {
  return t(n) && typeof n == "number";
}
function f(n) {
  return r(n) && Number.isNaN(n);
}
function e(n) {
  return t(n) && typeof n == "boolean";
}
function s(n) {
  return n === null;
}
function c(n) {
  return n === void 0;
}
function u(n) {
  return t(n) && typeof n == "symbol";
}
function y(n) {
  return t(n) && typeof n == "bigint";
}
function p(n) {
  return t(n) && Array.isArray(n);
}
function b(n) {
  return t(n) && typeof n == "object" && !Array.isArray(n);
}
function m(n) {
  return t(n) && typeof n == "function";
}
function g(n) {
  return t(n) && n instanceof Date;
}
function N(n) {
  return t(n) && n instanceof RegExp;
}
function S(n) {
  return t(n) && n instanceof Error;
}
function A(n) {
  return t(n) && n instanceof Map;
}
function d(n) {
  return t(n) && n instanceof Set;
}
function E(n) {
  return t(n) && n instanceof Promise;
}
function x(n) {
  return t(n) ? String(n) : "";
}
export {
  p as isArray,
  y as isBigInt,
  e as isBoolean,
  g as isDate,
  S as isError,
  m as isFunction,
  A as isMap,
  f as isNaN,
  s as isNull,
  r as isNumber,
  b as isObject,
  E as isPromise,
  N as isRegExp,
  d as isSet,
  o as isString,
  u as isSymbol,
  c as isUndefined,
  x as toString
};
