import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "libra-js-kit",
  description: "一个专为各类业务系统打造的现代化 JavaScript 工具包",
  lang: "zh-CN",
  base: "/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",

    nav: [
      { text: "指南", link: "/guide/getting-started" },
      { text: "API 参考", link: "/api/README" },
      {
        text: "相关链接",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/yeyongzhi/Libra-js-kit",
          },
          {
            text: "CHANGELOG",
            link: "https://github.com/yeyongzhi/Libra-js-kit/blob/master/CHANGELOG.md",
          },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "开始",
          items: [
            { text: "快速开始", link: "/guide/getting-started" },
          ],
        },
        {
          text: "核心模块",
          items: [
            { text: "lib — 基础工具", link: "/guide/lib" },
            { text: "dataType — 类型检测", link: "/guide/data-type" },
            { text: "array — 数组操作", link: "/guide/array" },
            { text: "string — 字符串处理", link: "/guide/string" },
            { text: "render — 数据渲染", link: "/guide/render" },
            { text: "validate — 数据验证", link: "/guide/validate" },
          ],
        },
      ],

      "/api/": [
        {
          text: "API 总览",
          items: [
            { text: "概览", link: "/api/README" },
            { text: "NAME", link: "/api/variables/NAME" },
            { text: "VERSION", link: "/api/variables/VERSION" },
          ],
        },
        {
          text: "arrayKit — 数组操作",
          collapsed: true,
          items: [
            {
              text: "模块概览",
              link: "/api/libra-js-kit/namespaces/arrayKit/README",
            },
            { text: "chunk", link: "/api/libra-js-kit/namespaces/arrayKit/functions/chunk" },
            { text: "difference", link: "/api/libra-js-kit/namespaces/arrayKit/functions/difference" },
            { text: "flattenDeep", link: "/api/libra-js-kit/namespaces/arrayKit/functions/flattenDeep" },
            { text: "groupBy", link: "/api/libra-js-kit/namespaces/arrayKit/functions/groupBy" },
            { text: "intersection", link: "/api/libra-js-kit/namespaces/arrayKit/functions/intersection" },
            { text: "randomItem", link: "/api/libra-js-kit/namespaces/arrayKit/functions/randomItem" },
            { text: "transArrayToTree", link: "/api/libra-js-kit/namespaces/arrayKit/functions/transArrayToTree" },
            { text: "unique", link: "/api/libra-js-kit/namespaces/arrayKit/functions/unique" },
            { text: "TreeOptions", link: "/api/libra-js-kit/namespaces/arrayKit/interfaces/TreeOptions" },
          ],
        },
        {
          text: "dataTypeKit — 类型检测",
          collapsed: true,
          items: [
            {
              text: "模块概览",
              link: "/api/libra-js-kit/namespaces/dataTypeKit/README",
            },
            { text: "isArray", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isArray" },
            { text: "isBigInt", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isBigInt" },
            { text: "isBoolean", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isBoolean" },
            { text: "isDate", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isDate" },
            { text: "isError", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isError" },
            { text: "isFunction", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isFunction" },
            { text: "isMap", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isMap" },
            { text: "isNaN", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isNaN" },
            { text: "isNull", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isNull" },
            { text: "isNumber", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isNumber" },
            { text: "isObject", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isObject" },
            { text: "isPromise", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isPromise" },
            { text: "isRegExp", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isRegExp" },
            { text: "isSet", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isSet" },
            { text: "isString", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isString" },
            { text: "isSymbol", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isSymbol" },
            { text: "isUndefined", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/isUndefined" },
            { text: "toString", link: "/api/libra-js-kit/namespaces/dataTypeKit/functions/toString" },
          ],
        },
        {
          text: "libKit — 基础工具",
          collapsed: true,
          items: [
            {
              text: "模块概览",
              link: "/api/libra-js-kit/namespaces/libKit/README",
            },
            { text: "assertDefined", link: "/api/libra-js-kit/namespaces/libKit/functions/assertDefined" },
            { text: "defaultValue", link: "/api/libra-js-kit/namespaces/libKit/functions/defaultValue" },
            { text: "firstDefined", link: "/api/libra-js-kit/namespaces/libKit/functions/firstDefined" },
            { text: "isDefined", link: "/api/libra-js-kit/namespaces/libKit/functions/isDefined" },
            { text: "isNotDefined", link: "/api/libra-js-kit/namespaces/libKit/functions/isNotDefined" },
          ],
        },
        {
          text: "renderKit — 数据渲染",
          collapsed: true,
          items: [
            {
              text: "模块概览",
              link: "/api/libra-js-kit/namespaces/renderKit/README",
            },
            { text: "renderArrayLabelByValue", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderArrayLabelByValue" },
            { text: "renderBoolean", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderBoolean" },
            { text: "renderEmpty", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderEmpty" },
            { text: "renderEnum", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderEnum" },
            { text: "renderFileSize", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderFileSize" },
            { text: "renderListSummary", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderListSummary" },
            { text: "renderMaskedString", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderMaskedString" },
            { text: "renderObjectValue", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderObjectValue" },
            { text: "renderPercentage", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderPercentage" },
            { text: "renderText", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderText" },
            { text: "renderTextByArray", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderTextByArray" },
            { text: "renderTimeRange", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderTimeRange" },
            { text: "renderTruncatedText", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderTruncatedText" },
            { text: "renderValueAndUnit", link: "/api/libra-js-kit/namespaces/renderKit/functions/renderValueAndUnit" },
          ],
        },
        {
          text: "stringKit — 字符串处理",
          collapsed: true,
          items: [
            {
              text: "模块概览",
              link: "/api/libra-js-kit/namespaces/stringKit/README",
            },
            { text: "allLowerCase", link: "/api/libra-js-kit/namespaces/stringKit/functions/allLowerCase" },
            { text: "allUpperCase", link: "/api/libra-js-kit/namespaces/stringKit/functions/allUpperCase" },
            { text: "capitalize", link: "/api/libra-js-kit/namespaces/stringKit/functions/capitalize" },
            { text: "reverse", link: "/api/libra-js-kit/namespaces/stringKit/functions/reverse" },
          ],
        },
        {
          text: "validateKit — 数据验证",
          collapsed: true,
          items: [
            {
              text: "模块概览",
              link: "/api/libra-js-kit/namespaces/validateKit/README",
            },
            { text: "isValidBankCard", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidBankCard" },
            { text: "isValidCreditCode", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidCreditCode" },
            { text: "isValidEmail", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidEmail" },
            { text: "isValidEmailOrPhone", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidEmailOrPhone" },
            { text: "isValidIDCard", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidIDCard" },
            { text: "isValidIP", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidIP" },
            { text: "isValidIPv4", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidIPv4" },
            { text: "isValidIPv6", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidIPv6" },
            { text: "isValidLicensePlate", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidLicensePlate" },
            { text: "isValidMAC", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidMAC" },
            { text: "isValidOrgCode", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidOrgCode" },
            { text: "isValidPassport", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidPassport" },
            { text: "isValidPhone", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidPhone" },
            { text: "isValidPhoneOrTel", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidPhoneOrTel" },
            { text: "isValidQQ", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidQQ" },
            { text: "isValidURL", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidURL" },
            { text: "isValidWeChat", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidWeChat" },
            { text: "isValidZipCode", link: "/api/libra-js-kit/namespaces/validateKit/functions/isValidZipCode" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/yeyongzhi/Libra-js-kit",
      },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Aurora",
    },

    outline: {
      level: [2, 3],
      label: "页面导航",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
  },

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    lineNumbers: true,
  },
});
