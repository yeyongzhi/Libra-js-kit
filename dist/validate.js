import { isDefined as e } from "./lib.js";
import { isString as n } from "./dataType.js";
import { EMAIL_REGEX as c, PHONE_REGEX as R, ID_CARD_15_REGEX as _, ID_CARD_18_REGEX as V, LICENSE_PLATE_REGEX as G, BANK_CARD_REGEX as X, QQ_REGEX as I, WECHAT_REGEX as d, URL_REGEX as C, IPV4_REGEX as P, IPV6_REGEX as D, ZIP_CODE_REGEX as A, PASSPORT_REGEX as O, ORG_CODE_REGEX as g, CREDIT_CODE_REGEX as m, MAC_REGEX as L, TEL_REGEX as h } from "./validate/config.js";
function T(t) {
  return !e(t) || !n(t) ? !1 : c.test(t);
}
function a(t) {
  return !e(t) || !n(t) ? !1 : R.test(t);
}
function M(t) {
  if (!e(t) || !n(t)) return !1;
  const r = t.toUpperCase();
  if (r.length === 15)
    return _.test(r);
  if (r.length === 18) {
    if (!V.test(r)) return !1;
    const l = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], i = "10X98765432";
    let f = 0;
    for (let u = 0; u < 17; u++)
      f += parseInt(r[u], 10) * l[u];
    const s = f % 11, E = i[s];
    return r[17].toUpperCase() === E;
  }
  return !1;
}
function S(t) {
  return !e(t) || !n(t) ? !1 : G.test(t);
}
function B(t) {
  if (!e(t) || !n(t)) return !1;
  const r = t.replace(/\s/g, "");
  if (!X.test(r)) return !1;
  let l = 0, i = !1;
  for (let f = r.length - 1; f >= 0; f--) {
    let s = parseInt(r[f], 10);
    i && (s *= 2, s > 9 && (s = s % 10 + 1)), l += s, i = !i;
  }
  return l % 10 === 0;
}
function H(t) {
  return !e(t) || !n(t) ? !1 : I.test(t);
}
function W(t) {
  return !e(t) || !n(t) ? !1 : d.test(t);
}
function x(t) {
  return !e(t) || !n(t) ? !1 : C.test(t);
}
function k(t) {
  return !e(t) || !n(t) ? !1 : P.test(t);
}
function N(t) {
  return !e(t) || !n(t) ? !1 : D.test(t);
}
function K(t) {
  return k(t) || N(t);
}
function Z(t) {
  return !e(t) || !n(t) ? !1 : A.test(t);
}
function F(t) {
  return !e(t) || !n(t) ? !1 : O.test(t);
}
function J(t) {
  return !e(t) || !n(t) ? !1 : g.test(t);
}
function Y(t) {
  if (!e(t) || !n(t) || t.length !== 18 || !m.test(t)) return !1;
  const r = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28], l = "0123456789ABCDEFGHJKLMNPQRTUWXY";
  let i = 0;
  for (let E = 0; E < 17; E++) {
    const u = t[E], o = isNaN(parseInt(u, 10)) ? l.indexOf(u) + 10 : parseInt(u, 10);
    i += o * r[E];
  }
  const f = i % 31, s = l[31 - f];
  return t[17] === s;
}
function j(t) {
  return !e(t) || !n(t) ? !1 : L.test(t);
}
function w(t) {
  return T(t) || a(t);
}
function y(t) {
  return !e(t) || !n(t) ? !1 : a(t) ? !0 : h.test(t);
}
export {
  B as isValidBankCard,
  Y as isValidCreditCode,
  T as isValidEmail,
  w as isValidEmailOrPhone,
  M as isValidIDCard,
  K as isValidIP,
  k as isValidIPv4,
  N as isValidIPv6,
  S as isValidLicensePlate,
  j as isValidMAC,
  J as isValidOrgCode,
  F as isValidPassport,
  a as isValidPhone,
  y as isValidPhoneOrTel,
  H as isValidQQ,
  x as isValidURL,
  W as isValidWeChat,
  Z as isValidZipCode
};
