export const healthCheckSync = () => ('OK');

export const healthCheckAsync = () => {
  return Promise.resolve('OK');
}