export default (min = 0, max = 50) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};
