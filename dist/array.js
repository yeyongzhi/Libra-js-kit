import { isNumber as p, isArray as a } from "./dataType.js";
function m(n, t) {
  if (!p(t) || !a(n)) return [];
  if (t <= 0 || t >= n.length) return [];
  const e = [];
  for (let o = 0; o < n.length; o += t)
    e.push(n.slice(o, o + t));
  return e;
}
function g(n) {
  return n.reduce((t, e) => t.concat(Array.isArray(e) ? g(e) : e), []);
}
function S(n, t) {
  if (n.length === 0) return [];
  const e = /* @__PURE__ */ new Set(), o = [], u = (r) => typeof t == "function" ? t(r) : typeof t == "string" ? r[t] : r;
  for (const r of n) {
    const c = u(r);
    e.has(c) || (e.add(c), o.push(r));
  }
  return o;
}
function b(n, t) {
  const e = new Set(t);
  return n.filter((o) => !e.has(o));
}
function w(n, t) {
  const e = new Set(t);
  return n.filter((o) => e.has(o));
}
function A(n, t) {
  let e = [];
  const o = {};
  for (const u of n) {
    const r = t(u);
    o[r] || (o[r] = []), o[r].push(u);
  }
  return e = Object.keys(o).map((u) => ({
    value: u,
    data: o[u]
  })), e;
}
function K(n) {
  if (n.length === 0) return;
  const t = Math.floor(Math.random() * n.length);
  return n[t];
}
function I(n, t = {}) {
  const {
    idKey: e = "id",
    parentKey: o = "parentId",
    rootValue: u = null,
    childrenKey: r = "children"
  } = t, c = /* @__PURE__ */ new Map(), l = [];
  for (const i of n) {
    const f = i[e];
    if (f == null) continue;
    const s = { ...i };
    s[r] = [], c.set(f, s);
  }
  for (const i of n) {
    const f = i[e], s = i[o];
    if (f == null) continue;
    const d = c.get(f);
    if (s === u || s == null && u == null)
      l.push(d);
    else {
      const h = c.get(s);
      h ? h[r].push(d) : l.push(d);
    }
  }
  return l;
}
export {
  m as chunk,
  b as difference,
  g as flattenDeep,
  A as groupBy,
  w as intersection,
  K as randomItem,
  I as transArrayToTree,
  S as unique
};
