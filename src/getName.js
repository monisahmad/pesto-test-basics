export default (name) => {
  if (typeof name === 'string') return `You entered: ${name}`;
  throw new Error('name should be of type string');
};
