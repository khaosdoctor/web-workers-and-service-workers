function fibonacci (n) {
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

self.onmessage = (message) => {
  const result = fibonacci(message.data)
  self.postMessage({ result })
  close()
}
