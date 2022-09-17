// импортируем библиотеку 'readline-sync': https://github.com/anseki/readline-sync
import readlineSync from 'readline-sync';

// экспортируем функцию позволяющую спросить у пользователя вопрос, записать и отобразить ответ
export default (question) => readlineSync.question(`${question}`);
