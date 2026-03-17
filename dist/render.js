import { isDefined as i, defaultValue as c } from "./lib.js";
import { isString as B, toString as m, isArray as x, isNumber as M } from "./dataType.js";
import { format as h } from "./date/index.js";
import { DEFAULT_TIME_FORMAT as V } from "./date/config.js";
import { getEmptyText as o, getTimeRangeSeparator as b, FILE_SIZE_UNITS as A } from "./render/config.js";
function C(r) {
  return i(r) ? String(r) : o();
}
function N(r, n) {
  return i(r) ? B(n) ? c(m(r[n]), o()) : o() : o();
}
function S(r, n) {
  if (!i(r))
    return o();
  if (!Array.isArray(r) || r.length === 0)
    return o();
  const { separator: e = "、" } = n || {};
  return r.filter((t) => i(t)).join(e);
}
function R(r, n, e) {
  const { needBlock: t = !0 } = e || {};
  return i(r) ? `${m(r)}${t ? " " : ""}${c(n, "")}` : o();
}
function U(r, n, e) {
  if (!i(r) || !i(n))
    return o();
  const { separator: t = b(), format: f = V, needBlock: a = !0 } = e || {};
  return `${h(r, f)}${a ? " " : ""}${t}${a ? " " : ""}${h(n, f)}`;
}
function k(r, n) {
  if (!i(r) || !i(n))
    return o();
  if (x(r) && r.length === 0)
    return o();
  if (x(r))
    return S(r.map((t) => k(t, n)));
  const e = n.find((t) => t.value === r);
  return i(e) ? e.label : o();
}
function j(r, n) {
  if (!i(r) || i(r) && !M(r)) return o();
  const { precision: e = 2, needBlock: t = !0 } = c(n, {});
  return `${(Number(r) * 100).toFixed(e)}${t ? " " : ""}%`;
}
function w(r, n) {
  if (!i(r) || typeof r != "number" || r < 0) return o();
  const { precision: e = 1 } = c(n, {});
  let t = r, f = 0;
  for (; t >= 1024 && f < A.length - 1; )
    t /= 1024, f++;
  return `${t.toFixed(e)} ${A[f]}`;
}
function D(r, n) {
  if (!i(r)) return o();
  const { trueText: e = "是", falseText: t = "否" } = c(n, {});
  return r ? e : t;
}
function O(r, n) {
  return !i(r) || !i(n) ? o() : c(n[r], o());
}
function Z(r, n = o()) {
  return i(r) ? m(r) : n;
}
function P(r, {
  hideFirst: n,
  hideLast: e,
  hideMiddle: t,
  maskChar: f = "*",
  keepFormat: a = !0
} = {}) {
  if (!i(r))
    return o();
  let u = String(r);
  if (a || (u = u.replace(/[^a-zA-Z0-9]/g, "")), u.length === 0)
    return o();
  const s = u.length;
  let g = "", d = "", l = 0;
  if (i(n) && n > 0)
    l = Math.min(n, s), d = u.slice(l);
  else if (i(e) && e > 0)
    l = Math.min(e, s), g = u.slice(0, s - l);
  else {
    const y = i(t) ? t : 4;
    l = Math.min(y, s);
    const $ = s - l, p = Math.floor($ / 2), E = $ - p;
    g = u.slice(0, p), d = u.slice(s - E);
  }
  const T = f.repeat(l);
  return `${g}${T}${d}`;
}
function q(r, n) {
  const { maxLength: e = 10, ellipsis: t = "..." } = c(n, {}), f = i(r) ? String(r) : "";
  return f.length <= e ? f : f.slice(0, e) + t;
}
function G(r, n) {
  const { maxCount: e = 2, suffix: t = "项" } = c(n, {});
  if (!i(r) || Array.isArray(r) && r.length === 0)
    return o();
  if (r.length <= e)
    return S(r, { separator: "、" });
  const f = r.slice(0, e).filter(i);
  return `${f.join("、")} 等${r.length - f.length}${t}`;
}
export {
  k as renderArrayLabelByValue,
  D as renderBoolean,
  Z as renderEmpty,
  O as renderEnum,
  w as renderFileSize,
  G as renderListSummary,
  P as renderMaskedString,
  N as renderObjectValue,
  j as renderPercentage,
  C as renderText,
  S as renderTextByArray,
  U as renderTimeRange,
  q as renderTruncatedText,
  R as renderValueAndUnit
};
