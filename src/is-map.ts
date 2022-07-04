export function isMap<K, T>(value: unknown): value is Map<K, T> {
  return Object.prototype.toString.call(value) === "[object Map]";
}
