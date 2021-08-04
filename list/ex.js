"use strict";

// Put your code here! :)
const getFixedNumber = (value) => {
  return () => {
    return value;
  };
};

const add = (x, y) => x + y;
const add2 = (func1, func2) => {
  return add(func1(), func2());
};
const addn = ([fn1, fn2, ...fns]) => {
  const initialValue = () => add2(fn1, fn2);
  return fns.reduce((res, fn) => {
    return add2(res, fn);
  }, initialValue);
};

// With Recursion
// const addn = ([fn1, fn2, ...fns]) => {
//   if (fns.length > 0) {
//     return addn([
//       () => {
//         return add2(fn1, fn2);
//       },
//       fns,
//     ]);
//   }
//   return add2(fn1, fn2);
// };

const array = [1, 4, 4, 2, 3, 4, 2, 5, 9, 7, 8, 7];

const isEven = (num) => num % 2 === 0;
addn(
  array
    .reduce((res, num) => {
      const copied = [...num];
      const foundIndex = res.indexOf(copied);
      if (foundIndex !== -1) {
        return copied.concat(num);
      }
      return copied;
    }, [])
    .filter(isEven)
    .map(getFixedNumber)
);
