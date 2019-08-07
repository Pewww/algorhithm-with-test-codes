/**
 * 최대공약수: Euclid Method
 * 
 * m >= n인 두 양의 정수 m과 n에 대해서 m이 n의 배수이면 gcd(m, n) = n이고,
 * 그렇지 않으면 gcd(m, n) = gcd(n, m % n)이다.
 */

export default function gcd(m, n) {
  if (m < n) {
    let temp = m;
    m = n;
    n = temp;
  }

  if (m % n === 0) {
    return n;
  }

  return gcd(n, m % n);
}