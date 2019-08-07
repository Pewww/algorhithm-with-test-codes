export default function func(loop) {
  if (typeof loop !== 'number') {
    throw new TypeError(`paramter 'loop' should be a number`);
  }

  const arr = [];

  (function _func(num) {
    if (num <= 0) { // Base Case: 적어도 하나의 recursion에 빠지지 않는 경우가 존재해야 한다.
      return;
    } else {
      arr.push(num);
      _func(num - 1); // Recursive Case: recursion을 반복하다 보면 결국 Base Case로 수렴해야 한다.
    }
  })(loop);

  return arr;
}