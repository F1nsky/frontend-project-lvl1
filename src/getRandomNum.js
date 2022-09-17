// экспортируем функцию позволяющую получить случайное число
export default (min = 0, max = 50) => Math.floor(Math.random() * (max - min + 1) + min);
