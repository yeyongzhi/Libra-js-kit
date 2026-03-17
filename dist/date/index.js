import { DEFAULT_TIME_FORMAT as o } from "./config.js";
function m(t, n = o) {
  const e = S(t);
  if (isNaN(e.getTime()))
    return "";
  const a = e.getFullYear(), g = e.getMonth() + 1, i = e.getDate(), r = e.getHours(), c = e.getMinutes(), s = e.getSeconds(), p = e.getMilliseconds();
  return n.replace(/YYYY/g, String(a)).replace(/YY/g, String(a).slice(-2)).replace(/MM/g, String(g).padStart(2, "0")).replace(/M/g, String(g)).replace(/DD/g, String(i).padStart(2, "0")).replace(/D/g, String(i)).replace(/HH/g, String(r).padStart(2, "0")).replace(/H/g, String(r)).replace(/hh/g, String(r % 12 || 12).padStart(2, "0")).replace(/h/g, String(r % 12 || 12)).replace(/mm/g, String(c).padStart(2, "0")).replace(/m/g, String(c)).replace(/ss/g, String(s).padStart(2, "0")).replace(/s/g, String(s)).replace(/SSS/g, String(p).padStart(3, "0")).replace(/A/g, r >= 12 ? "PM" : "AM").replace(/a/g, r >= 12 ? "pm" : "am");
}
function S(t) {
  if (t instanceof Date)
    return new Date(t.getTime());
  if (typeof t == "number")
    return new Date(t);
  if (typeof t == "string") {
    const n = new Date(t);
    if (isNaN(n.getTime())) {
      const e = Date.parse(t);
      return new Date(isNaN(e) ? 0 : e);
    }
    return n;
  }
  return /* @__PURE__ */ new Date();
}
export {
  m as format,
  S as parse
};
