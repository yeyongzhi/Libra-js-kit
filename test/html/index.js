// import * as libra from 'libra-js-kit';

import * as libra from "../../dist/index.js";
import {
  renderKit,
  libKit,
  stringKit,
  dataTypeKit,
  arrayKit,
} from "../../dist/index.js";
import { getEmptyText } from "../../dist/render/config.js";

console.log(libra.VERSION);
console.log(libra.NAME);

// libKit
const libExamples = [
  {
    name: "isDefined",
    code: `libKit.isDefined(null)`,
    result: libKit.isDefined(null),
  },
  {
    name: "isNotDefined",
    code: `libKit.isNotDefined(null)`,
    result: libKit.isNotDefined(null),
  },
  {
    name: "defaultValue",
    code: `libKit.defaultValue(null, '默认值')`,
    result: libKit.defaultValue(null, "默认值"),
  },
  {
    name: "firstDefined",
    code: `libKit.firstDefined(null, undefined, 123)`,
    result: libKit.firstDefined(null, undefined, 123),
  },
  {
    name: "assertDefined(为null会抛出异常)",
    code: `libKit.assertDefined(11)`,
    result: libKit.assertDefined(11),
  },
];

const dataTypeExamples = [
  {
    name: "【判断是否为字符串】isString",
    code: `dataTypeKit.isString('string')`,
  },
  {
    name: "【判断是否为数字】isNumber",
    code: `dataTypeKit.isNumber(123)`,
  },
  {
    name: "【判断是否为布尔值】isBoolean",
    code: `dataTypeKit.isBoolean(123)`,
  },
  {
    name: "【判断是否为 null】isNull",
    code: `dataTypeKit.isNull(null)`,
  },
  {
    name: "【判断是否为 undefined】isUndefined",
    code: `dataTypeKit.isUndefined([])`,
  },
  {
    name: "【判断是否为 Symbol】isSymbol",
    code: `dataTypeKit.isSymbol(Symbol('symbol'))`,
  },
  {
    name: "【判断是否为 BigInt】isBigInt",
    code: `dataTypeKit.isBigInt(123)`,
  },
  {
    name: "【判断是否为数组】isArray",
    code: `dataTypeKit.isArray([])`,
  },
  {
    name: "【判断是否为对象】isObject",
    code: `dataTypeKit.isObject({})`,
  },
  {
    name: "【判断是否为函数】isFunction",
    code: `dataTypeKit.isFunction(() => {})`,
  },
  {
    name: "【判断是否为日期】isDate",
    code: `dataTypeKit.isDate(new Date())`,
  },
  {
    name: "【判断是否为正则表达式】isRegExp",
    code: `dataTypeKit.isRegExp(/[a-z]/)`,
  },
  {
    name: "【判断是否为错误对象】isError",
    code: `dataTypeKit.isError(new Error('error'))`,
  },
  {
    name: "【判断是否为 Map 对象】isMap",
    code: `dataTypeKit.isMap(new Map())`,
  },
  {
    name: "【判断是否为 Set 对象】isSet",
    code: `dataTypeKit.isSet(new Set())`,
  },
  {
    name: "【判断是否为 Promise 对象】isPromise",
    code: `dataTypeKit.isPromise(new Promise(() => {}))`,
  },
  {
    name: "【将值转换为字符串】toString",
    code: `dataTypeKit.toString(1231)`,
  },
];

const arrayExamples = [
  {
    name: "【将数组按指定大小分块】chunk",
    code: `arrayKit.chunk([1, 2, 3, 4, 5, 6], 2)`,
    result: JSON.stringify(arrayKit.chunk([1, 2, 3, 4, 5, 6], 2)),
  },
  {
    name: "【深度扁平化数组（递归展开所有嵌套层级）】flattenDeep",
    code: `arrayKit.flattenDeep([1, [2, [3, [4]]]])`,
    result: JSON.stringify(arrayKit.flattenDeep([1, [2, [3, [4]]]])),
  },
  {
    name: "【去重】unique",
    code: `arrayKit.unique([1, 2, 2, 3, 4, 4, 5])`,
    result: JSON.stringify(arrayKit.unique([1, 2, 2, 3, 4, 4, 5])),
  },
  {
    name: "返回在 a 中但不在 b 中的元素（差集）",
    code: `arrayKit.difference([1, 2, 3, 4, 5, 6], [2, 4, 6])`,
    result: JSON.stringify(arrayKit.difference([1, 2, 3, 4, 5, 6], [2, 4, 6])),
  },
  {
    name: "【返回两个数组的交集（公共元素）】intersection",
    code: `arrayKit.intersection([1, 2, 3, 4, 5, 6], [2, 4, 6])`,
    result: JSON.stringify(
      arrayKit.intersection([1, 2, 3, 4, 5, 6], [2, 4, 6]),
    ),
  },
  {
    name: "【根据回调函数对数组进行分组】groupBy",
    code: `arrayKit.groupBy([{age:20}, {age:30}, {age:20}], x => x.age)`,
    result: JSON.stringify(
      arrayKit.groupBy([{ age: 20 }, { age: 30 }, { age: 20 }], (x) => x.age),
    ),
  },
  {
    name: "【从数组中随机返回一个元素】randomItem",
    code: `arrayKit.randomItem([1, 2, 3, 4, 5, 6])`,
    result: JSON.stringify(arrayKit.randomItem([1, 2, 3, 4, 5, 6])),
  },
  {
    name: "【将数组转换为树结构】transArrayToTree",
    code: `transArrayToTree(list, { idKey: 'id', parentKey: 'parentId', rootValue: 0 })`,
    result: () => {
      const list = [
        { id: 1, name: "A", parentId: 0 },
        { id: 2, name: "B", parentId: 1 },
        { id: 3, name: "C", parentId: 1 },
        { id: 4, name: "D", parentId: 2 },
      ];
      return JSON.stringify(
        arrayKit.transArrayToTree(list, {
          idKey: "id",
          parentKey: "parentId",
          rootValue: 0,
        }),
      );
    },
  },
];

// stringKit
const stringExamples = [
  {
    name: "【首字母大写】capitalize",
    code: `stringKit.capitalize('hello world')`,
    result: stringKit.capitalize("hello world"),
  },
  {
    name: "allUpperCase",
    code: `stringKit.allUpperCase('string')`,
    result: stringKit.allUpperCase("string"),
  },
  {
    name: "allLowerCase",
    code: `stringKit.allLowerCase('HELLO WORLD')`,
    result: stringKit.allLowerCase("HELLO WORLD"),
  },
  {
    name: "reverse",
    code: `stringKit.reverse('123')`,
    result: stringKit.reverse("123"),
  },
];

// renderKit
const renderExamples = [
  {
    name: "renderText",
    code: `renderKit.renderText('Hello World')`,
    result: renderKit.renderText("Hello World"),
  },
  {
    name: "renderObjectValue",
    code: `renderKit.renderObjectValue({ name: '张三', age: 25 }, 'name')`,
    result: renderKit.renderObjectValue({ name: "张三", age: 25 }, "name"),
  },
  {
    name: "renderTextByArray",
    code: `renderKit.renderTextByArray(['苹果', '香蕉', '橙子'], { separator: '~' })`,
    result: renderKit.renderTextByArray(["苹果", "香蕉", "橙子"], {
      separator: "~",
    }),
  },
  {
    name: "renderValueAndUnit",
    code: `renderKit.renderValueAndUnit(100, 'kg', { needBlock: true })`,
    result: renderKit.renderValueAndUnit(100, "kg", { needBlock: true }),
  },
  {
    name: "renderTimeRange",
    code: `renderKit.renderTimeRange('2025-1-1', '2025-1-2')`,
    result: renderKit.renderTimeRange("2025-1-1", "2025-1-2"),
  },
  {
    name: "renderArrayLabelByValue",
    code: `renderKit.renderArrayLabelByValue('bj', [{ value: 'zj', label: '浙江省' }, { value: 'bj', label: '北京市' }, { value: 'sh', label: '上海市' }])`,
    result: renderKit.renderArrayLabelByValue("bj", [
      { value: "zj", label: "浙江省" },
      { value: "bj", label: "北京市" },
      { value: "sh", label: "上海市" },
    ]),
  },
  {
    name: "renderPercentage",
    code: `renderKit.renderPercentage(0.85756, { precision: 3 })`,
    result: renderKit.renderPercentage(0.85756, { precision: 3 }),
  },
  {
    name: "renderFileSize",
    code: `renderKit.renderFileSize(1024 * 1024 * 2.5)`,
    result: renderKit.renderFileSize(1024 * 1024 * 2.5),
  },
  {
    name: "renderBoolean",
    code: `renderKit.renderBoolean(true, { trueText = '是', falseText = '否' })`,
    result: renderKit.renderBoolean(true, { trueText: "是", falseText: "否" }),
  },
  {
    name: "renderEnum",
    code: `renderKit.renderEnum(1, { 0: '禁用', 1: '启用' })`,
    result: renderKit.renderEnum(1, { 0: "禁用", 1: "启用" }),
  },
  {
    name: "renderEmpty",
    code: `renderKit.renderEmpty(undefined)`,
    result: renderKit.renderEmpty(undefined),
  },
  {
    name: "renderMaskedString",
    code: `renderKit.renderMaskedString('13812345678', { hideMiddle: 4 })`,
    result: renderKit.renderMaskedString("13812345678", { hideMiddle: 4 }),
  },
  {
    name: "renderTruncatedText",
    code: `renderKit.renderTruncatedText('这是一个很长的文本内容用于演示截断效果', { maxLength: 10 })`,
    result: renderKit.renderTruncatedText(
      "这是一个很长的文本内容用于演示截断效果",
      { maxLength: 10 },
    ),
  },
  {
    name: "renderListSummary",
    code: `renderKit.renderListSummary(['张三', '李四', '王五'], { maxCount: 2, suffix: '人' })`,
    result: renderKit.renderListSummary(["张三", "李四", "王五"], {
      maxCount: 2,
      suffix: "人",
    }),
  },
];

function generateExampleHTML(title, examples) {
  const container = document.querySelector("body");

  // 创建页面标题
  const pageTitle = document.createElement("div");
  pageTitle.className = "page_title";
  pageTitle.textContent = title;
  container.appendChild(pageTitle);

  const pageContainer = document.createElement("div");
  pageContainer.className = "page_container";
  container.appendChild(pageContainer);

  // 为每个示例生成HTML
  examples.forEach((example) => {
    const box = document.createElement("div");
    box.className = "box";

    const title = document.createElement("div");
    title.className = "title";
    title.innerHTML = `⚡️${example.name}`;
    box.appendChild(title);

    const codeLabel = document.createElement("div");
    codeLabel.style.marginTop = "10px";
    codeLabel.style.marginBottom = "10px";
    codeLabel.textContent = "示例代码：";
    box.appendChild(codeLabel);

    const codeDiv = document.createElement("div");
    codeDiv.className = "content";
    codeDiv.id = `${example.name}-code`;
    codeDiv.textContent = example.code;
    box.appendChild(codeDiv);

    const resultLabel = document.createElement("div");
    resultLabel.style.marginTop = "10px";
    resultLabel.style.marginBottom = "10px";
    resultLabel.textContent = "输出结果：";
    box.appendChild(resultLabel);

    const resultDiv = document.createElement("div");
    resultDiv.className = "value";
    resultDiv.id = `${example.name}-result`;
    console.log("执行代码：", example.code);
    let result = example.result || eval(example.code);
    if (typeof result === "function") {
      result = result();
    }
    console.log("输出结果：", result);
    resultDiv.textContent = result;
    box.appendChild(resultDiv);

    pageContainer.appendChild(box);
  });
}

function init() {
  generateExampleHTML("📦️libKit", libExamples);
  generateExampleHTML("📦️dataTypeKit", dataTypeExamples);
  generateExampleHTML("📦️stringKit", stringExamples);
  generateExampleHTML("📦️arrayKit", arrayExamples);
  generateExampleHTML("📦️renderKit", renderExamples);
}

init();
