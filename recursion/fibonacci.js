/**
 * Fibonacci
 * 
 * f0 = 0
 * f1 = 1
 * fn = fn-1 + fn-2   n > 1
 */

export default function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}