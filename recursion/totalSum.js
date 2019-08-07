/**
 * recursion의 해석
 * ----------------------------------------------------------------
 * totalSum 함수의 missiondms 0 ~ n 까지의 합을 구하는 것이다.
 * n === 0 이라면 합은 0이다.
 * n이 0보다 크다면 0에서 n 까지의 합은, 0에서 n - 1 까지의 합에 n을 더한 것이다.
 * ----------------------------------------------------------------
 * 
 * 수학적 귀납법
 * ----------------------------------------------------------------
 * 정리: totalSum(n)은 음이 아닌 정수 n에 대하여, 0에서 n 까지의 합을 올바로 계산한다.
 * 증명 -
 * 1. n = 0인 경우: n = 0인 경우 0을 반환한다. (올바르다.)
 * 
 * 2. 임의의 양의 정수 k에 대해서 n < k인 경우 0에서 n 까지의 합을 올바르게 계산하여 반환한다고 가정하자.
 * 
 * 3. n = k인 경우를 고려해보자. totalSum은 먼저 totalSum(k - 1)을 호출하는데,
 * 2번의 가정에 의해서 0에서 k - 1 까지의 합이 올바로 계산되어 반환된다.
 * 메서드 totalSum은 그 값에 n을 더해서 반환한다.
 * 따라서, 메서드 totalSum은 0에서 k 까지의 합을 올바르게 계산하여 반환한다.
 */

export default function totalSum(n) {
  if (n === 0) {
    return 0;
  }

  return n + totalSum(n - 1);
}