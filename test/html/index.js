// import * as libra from 'libra-js-kit';

import * as libra from '../../dist/index.js';
import { renderKit } from '../../dist/index.js';
import { getEmptyText } from '../../dist/render/config.js';

console.log(libra.VERSION);
console.log(libra.NAME);
console.log(libra);

console.log(renderKit);
console.log(getEmptyText());

const array = [
    { value: 'zj', label: '浙江省' },
    { value: 'bj', label: '北京市' },
    { value: 'sh', label: '上海市' },
]

document.getElementById('testRender').innerHTML = renderKit.renderListSummary(['张三', '李四', '王五'], { maxCount: 2, suffix: '人' });
