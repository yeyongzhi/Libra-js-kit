[**libra-js-kit**](../../../README.md)

***

[libra-js-kit](../../../README.md) / arrayKit

# arrayKit

【数组操作工具集】提供分块、扁平化、分组等一些方法

## Example

```javascript
import * as arrayKit from 'libra-js-kit/array';
// 或者直接导出 chunk 方法
// import { chunk } from 'libra-js-kit/array';

// 示例：将数组 [1,2,3,4,5] 按大小 2 分块
arrayKit.chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]

```

## Interfaces

- [TreeOptions](interfaces/TreeOptions.md)

## Functions

- [chunk](functions/chunk.md)
- [difference](functions/difference.md)
- [flattenDeep](functions/flattenDeep.md)
- [groupBy](functions/groupBy.md)
- [intersection](functions/intersection.md)
- [randomItem](functions/randomItem.md)
- [transArrayToTree](functions/transArrayToTree.md)
- [unique](functions/unique.md)
