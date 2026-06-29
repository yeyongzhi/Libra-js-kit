# array — 数组操作

`array` 模块提供高效的数组处理函数，涵盖分块、扁平化、去重、集合运算、分组、树形转换等常用场景。

## 导入

```ts
// 全量引入
import { arrayKit } from "libra-js-kit";

// 按需引入（推荐）
import { chunk, unique, transArrayToTree } from "libra-js-kit/array";
```

## API

### `chunk(arr, size)`

将数组按指定大小依次分块。

```ts
import { chunk } from "libra-js-kit/array";

chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]

chunk(["a", "b", "c", "d"], 3);
// [["a", "b", "c"], ["d"]]
```

### `flattenDeep(arr)`

深度扁平化数组，递归展开所有嵌套层级。

```ts
import { flattenDeep } from "libra-js-kit/array";

flattenDeep([1, [2, [3, [4]], 5]]);
// [1, 2, 3, 4, 5]
```

### `unique(arr, key?)`

数组去重。支持基本类型自动去重；对于对象数组，可通过 `key` 指定按某个属性去重，或传入自定义回调函数。

```ts
import { unique } from "libra-js-kit/array";

// 基本类型去重
unique([1, 2, 2, 3, 3, 3]);
// [1, 2, 3]

// 对象数组按 key 去重
const users = [
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
  { id: 1, name: "张三" },
];
unique(users, "id");
// [{ id: 1, name: "张三" }, { id: 2, name: "李四" }]

// 自定义回调去重
unique(users, (item) => item.name);
```

### `difference(a, b)`

返回在数组 `a` 中但不在数组 `b` 中的元素（差集）。

```ts
import { difference } from "libra-js-kit/array";

difference([1, 2, 3, 4], [2, 4]);
// [1, 3]
```

### `intersection(a, b)`

返回数组 `a` 和 `b` 的交集。

```ts
import { intersection } from "libra-js-kit/array";

intersection([1, 2, 3], [2, 3, 4]);
// [2, 3]
```

### `groupBy(arr, keyFn)`

根据回调函数对数组进行分组。

```ts
import { groupBy } from "libra-js-kit/array";

const items = [
  { type: "fruit", name: "苹果" },
  { type: "fruit", name: "香蕉" },
  { type: "vegetable", name: "白菜" },
];

groupBy(items, (item) => item.type);
// [
//   { value: "fruit", data: [{ type: "fruit", name: "苹果" }, { type: "fruit", name: "香蕉" }] },
//   { value: "vegetable", data: [{ type: "vegetable", name: "白菜" }] },
// ]
```

### `randomItem(arr)`

从数组中随机返回一个元素。数组为空时返回 `undefined`。

```ts
import { randomItem } from "libra-js-kit/array";

randomItem([1, 2, 3, 4, 5]); // 随机返回其中一个，如 3
randomItem([]);               // undefined
```

### `transArrayToTree(list, options?)`

将扁平数组转换为树形结构，支持自定义 `idKey`、`parentKey`、`rootValue`、`childrenKey` 等配置。

```ts
import { transArrayToTree } from "libra-js-kit/array";

const flatData = [
  { id: 1, parentId: null, name: "根节点" },
  { id: 2, parentId: 1, name: "子节点 1" },
  { id: 3, parentId: 1, name: "子节点 2" },
  { id: 4, parentId: 2, name: "孙子节点" },
];

const tree = transArrayToTree(flatData);
// [
//   {
//     id: 1, parentId: null, name: "根节点",
//     children: [
//       {
//         id: 2, parentId: 1, name: "子节点 1",
//         children: [
//           { id: 4, parentId: 2, name: "孙子节点", children: [] }
//         ]
//       },
//       { id: 3, parentId: 1, name: "子节点 2", children: [] }
//     ]
//   }
// ]

// 自定义配置
transArrayToTree(flatData, {
  idKey: "id",
  parentKey: "parentId",
  rootValue: null,       // 根节点的 parentId 值
  childrenKey: "children", // 子节点存放的 key 名
});
```
