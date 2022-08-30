const someArr = [1, 2, 13, -4, 5];

const dblArr = someArr.map(v => v * 2);
console.table(dblArr);

const evenArr = someArr.filter(v => v % 2 == 0);
console.table(evenArr);

const oddArr = someArr.filter(v => v % 2 != 0);
const oddArrAlt = someArr.filter(v => !evenArr.includes(v));
console.table(oddArr);
console.table(oddArrAlt);

const maxV = someArr.reduce((p, v) => Math.max(p, v), someArr[0]);
console.log(maxV);

const minV = someArr.reduce((p, v) => Math.min(p, v), someArr[0]);
console.log(minV);

const sumV = someArr.reduce((p, v) => p + v, 0);
console.log(sumV);