alert('Resolve this')

import style from '../style.css'

const nestedArray = [1, 2, [3, 4]];
const flattened = nestedArray.flat();
console.log(flattened);
// [1, 2, 3, 4]

const nestedArray2 = [1, 2, [3, 4, [6, 7]]];
const flattened2 = nestedArray2.flat(1);//Solo queremos aplanar un nivel de profundidad
console.log(flattened2);
// [1, 2, 3, 4, [6,7]] // [6,7] queda intacto