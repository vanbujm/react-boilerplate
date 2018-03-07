const mockResponse = (data, shouldResolve) => ({
  json: async () =>
    new Promise(resolve => {
      const response = shouldResolve ? { data } : { error: data };
      process.nextTick(() => resolve(response));
    }),
});

export default function newsRequest(mockNewsData, shouldResolve = true) {
  return new Promise(resolve => {
    if (shouldResolve) {
      process.nextTick(() =>
        resolve(mockResponse(mockNewsData, shouldResolve)),
      );
    } else {
      process.nextTick(() =>
        resolve(mockResponse('Everything broke', shouldResolve)),
      );
    }
  });
}
