export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const nQuery = weakMap.get(endpoint);
    if (nQuery >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, nQuery + 1);
    }
  } else {
    weakMap.set(endpoint, 1);
  }
}
