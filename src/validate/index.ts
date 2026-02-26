import { isDefined } from '../lib/index';
import { isString } from '../dataType/index';
import {
  EMAIL_REGEX,
  PHONE_REGEX,
  ID_CARD_15_REGEX,
  ID_CARD_18_REGEX,
  LICENSE_PLATE_REGEX,
  BANK_CARD_REGEX,
  QQ_REGEX,
  WECHAT_REGEX,
  URL_REGEX,
  IPV4_REGEX,
  IPV6_REGEX,
  ZIP_CODE_REGEX,
  PASSPORT_REGEX,
  ORG_CODE_REGEX,
  CREDIT_CODE_REGEX,
  MAC_REGEX,
  TEL_REGEX
} from './config';

/**
 * 验证邮箱地址
 * @param {string} email 邮箱地址
 * @returns {boolean} 是否为有效的邮箱地址
 * @example
 * ```javascript
 * isValidEmail('test@example.com'); // true
 * isValidEmail('invalid-email'); // false
 * ```
 */
export function isValidEmail(email: string): boolean {
  if (!isDefined(email) || !isString(email)) return false;
  return EMAIL_REGEX.test(email);
}

/**
 * 验证中国大陆手机号码
 * @param {string} phone 手机号
 * @returns {boolean} 是否为有效的中国大陆手机号
 * @example
 * ```javascript
 * isValidPhone('13800138000'); // true
 * isValidPhone('12345'); // false
 * ```
 */
export function isValidPhone(phone: string): boolean {
  if (!isDefined(phone) || !isString(phone)) return false;
  return PHONE_REGEX.test(phone);
}

/**
 * 验证中国大陆身份证号码（支持15位和18位）
 * @param {string} idCard 身份证号码
 * @returns {boolean} 是否为有效的身份证号码
 * @example
 * ```javascript
 * isValidIDCard('110101199001011234'); // true
 * isValidIDCard('123456789012345'); // false
 * ```
 */
export function isValidIDCard(idCard: string): boolean {
  if (!isDefined(idCard) || !isString(idCard)) return false;
  
  const value = idCard.toUpperCase();
  
  if (value.length === 15) {
    return ID_CARD_15_REGEX.test(value);
  }
  
  if (value.length === 18) {
    if (!ID_CARD_18_REGEX.test(value)) return false;
    
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkCodes = '10X98765432';
    
    let sum = 0;
    for (let i = 0; i < 17; i++) {
      sum += parseInt(value[i], 10) * weights[i];
    }
    
    const mod = sum % 11;
    const checkCode = checkCodes[mod];
    
    return value[17].toUpperCase() === checkCode;
  }
  
  return false;
}

/**
 * 验证中国大陆车牌号码
 * @param {string} licensePlate 车牌号
 * @returns {boolean} 是否为有效的中国大陆车牌号
 * @example
 * ```javascript
 * isValidLicensePlate('京A12345'); // true
 * isValidLicensePlate('12345'); // false
 * ```
 */
export function isValidLicensePlate(licensePlate: string): boolean {
  if (!isDefined(licensePlate) || !isString(licensePlate)) return false;
  return LICENSE_PLATE_REGEX.test(licensePlate);
}

/**
 * 验证中国大陆银行卡号（Luhn算法）
 * @param {string} cardNumber 银行卡号
 * @returns {boolean} 是否为有效的银行卡号
 * @example
 * ```javascript
 * isValidBankCard('6222021234567890'); // true
 * isValidBankCard('1234567890123456'); // false
 * ```
 */
export function isValidBankCard(cardNumber: string): boolean {
  if (!isDefined(cardNumber) || !isString(cardNumber)) return false;
  
  const cleanNumber = cardNumber.replace(/\s/g, '');
  if (!BANK_CARD_REGEX.test(cleanNumber)) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i], 10);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit = (digit % 10) + 1;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

/**
 * 验证QQ号码
 * @param {string} qq QQ号码
 * @returns {boolean} 是否为有效的QQ号码
 * @example
 * ```javascript
 * isValidQQ('123456789'); // true
 * isValidQQ('abc'); // false
 * ```
 */
export function isValidQQ(qq: string): boolean {
  if (!isDefined(qq) || !isString(qq)) return false;
  return QQ_REGEX.test(qq);
}

/**
 * 验证微信ID
 * @param {string} wechat 微信ID
 * @returns {boolean} 是否为有效的微信ID
 * @example
 * ```javascript
 * isValidWeChat('username123'); // true
 * isValidWeChat('abc'); // false
 * ```
 */
export function isValidWeChat(wechat: string): boolean {
  if (!isDefined(wechat) || !isString(wechat)) return false;
  return WECHAT_REGEX.test(wechat);
}

/**
 * 验证URL地址
 * @param {string} url URL地址
 * @returns {boolean} 是否为有效的URL
 * @example
 * ```javascript
 * isValidURL('https://example.com'); // true
 * isValidURL('invalid-url'); // false
 * ```
 */
export function isValidURL(url: string): boolean {
  if (!isDefined(url) || !isString(url)) return false;
  return URL_REGEX.test(url);
}

/**
 * 验证IPv4地址
 * @param {string} ip IPv4地址
 * @returns {boolean} 是否为有效的IPv4地址
 * @example
 * ```javascript
 * isValidIPv4('192.168.1.1'); // true
 * isValidIPv4('256.1.1.1'); // false
 * ```
 */
export function isValidIPv4(ip: string): boolean {
  if (!isDefined(ip) || !isString(ip)) return false;
  return IPV4_REGEX.test(ip);
}

/**
 * 验证IPv6地址
 * @param {string} ip IPv6地址
 * @returns {boolean} 是否为有效的IPv6地址
 * @example
 * ```javascript
 * isValidIPv6('2001:0db8::1'); // true
 * isValidIPv6('invalid-ipv6'); // false
 * ```
 */
export function isValidIPv6(ip: string): boolean {
  if (!isDefined(ip) || !isString(ip)) return false;
  return IPV6_REGEX.test(ip);
}

/**
 * 验证IP地址（IPv4或IPv6）
 * @param {string} ip IP地址
 * @returns {boolean} 是否为有效的IP地址
 * @example
 * ```javascript
 * isValidIP('192.168.1.1'); // true
 * isValidIP('invalid-ip'); // false
 * ```
 */
export function isValidIP(ip: string): boolean {
  return isValidIPv4(ip) || isValidIPv6(ip);
}

/**
 * 验证邮政编码（中国大陆）
 * @param {string} zipCode 邮政编码
 * @returns {boolean} 是否为有效的邮政编码
 * @example
 * ```javascript
 * isValidZipCode('100000'); // true
 * isValidZipCode('12345'); // false
 * ```
 */
export function isValidZipCode(zipCode: string): boolean {
  if (!isDefined(zipCode) || !isString(zipCode)) return false;
  return ZIP_CODE_REGEX.test(zipCode);
}

/**
 * 验证护照号码（中国大陆）
 * @param {string} passport 护照号码
 * @returns {boolean} 是否为有效的护照号码
 * @example
 * ```javascript
 * isValidPassport('E12345678'); // true
 * isValidPassport('12345'); // false
 * ```
 */
export function isValidPassport(passport: string): boolean {
  if (!isDefined(passport) || !isString(passport)) return false;
  return PASSPORT_REGEX.test(passport);
}

/**
 * 验证组织机构代码
 * @param {string} orgCode 组织机构代码
 * @returns {boolean} 是否为有效的组织机构代码
 * @example
 * ```javascript
 * isValidOrgCode('12345678-9'); // true
 * isValidOrgCode('12345678'); // false
 * ```
 */
export function isValidOrgCode(orgCode: string): boolean {
  if (!isDefined(orgCode) || !isString(orgCode)) return false;
  return ORG_CODE_REGEX.test(orgCode);
}

/**
 * 验证统一社会信用代码
 * @param {string} creditCode 统一社会信用代码
 * @returns {boolean} 是否为有效的统一社会信用代码
 * @example
 * ```javascript
 * isValidCreditCode('91110108MA12345678'); // true
 * isValidCreditCode('123456789012345678'); // false
 * ```
 */
export function isValidCreditCode(creditCode: string): boolean {
  if (!isDefined(creditCode) || !isString(creditCode)) return false;
  
  if (creditCode.length !== 18) return false;
  
  if (!CREDIT_CODE_REGEX.test(creditCode)) return false;
  
  const weights = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
  const checkCodes = '0123456789ABCDEFGHJKLMNPQRTUWXY';
  
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    const code = creditCode[i];
    const value = isNaN(parseInt(code, 10)) 
      ? checkCodes.indexOf(code) + 10 
      : parseInt(code, 10);
    sum += value * weights[i];
  }
  
  const mod = sum % 31;
  const checkCode = checkCodes[31 - mod];
  
  return creditCode[17] === checkCode;
}

/**
 * 验证MAC地址
 * @param {string} mac MAC地址
 * @returns {boolean} 是否为有效的MAC地址
 * @example
 * ```javascript
 * isValidMAC('00:11:22:33:44:55'); // true
 * isValidMAC('invalid-mac'); // false
 * ```
 */
export function isValidMAC(mac: string): boolean {
  if (!isDefined(mac) || !isString(mac)) return false;
  return MAC_REGEX.test(mac);
}

/**
 * 验证邮箱或手机号（用于登录场景）
 * @param {string} value 邮箱或手机号
 * @returns {boolean} 是否为有效的邮箱或手机号
 * @example
 * ```javascript
 * isValidEmailOrPhone('test@example.com'); // true
 * isValidEmailOrPhone('invalid'); // false
 * ```
 */
export function isValidEmailOrPhone(value: string): boolean {
  return isValidEmail(value) || isValidPhone(value);
}

/**
 * 验证手机号或电话号码（支持固话）
 * @param {string} phone 手机号或电话号码
 * @returns {boolean} 是否为有效的电话号码
 * @example
 * ```javascript
 * isValidPhoneOrTel('13800138000'); // true
 * isValidPhoneOrTel('invalid'); // false
 * ```
 */
export function isValidPhoneOrTel(phone: string): boolean {
  if (!isDefined(phone) || !isString(phone)) return false;
  if (isValidPhone(phone)) return true;
  return TEL_REGEX.test(phone);
}
