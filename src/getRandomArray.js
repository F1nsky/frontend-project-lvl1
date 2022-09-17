// экспортируем функцию возвращающую случайны массив
export default (firstItem, increment, arrayLength) => {
  // объявляем первый элемент массива
  const array = [firstItem];
  // объявляем цикл возвращающий случайный массив длиной 'arrayLength'
  // с разницей между элементами массива равно 'increment'
  for (let i = 1; array.length <= arrayLength; i += 1) {
    array[i] = array[i - 1] + increment;
  }
  return array;
};
