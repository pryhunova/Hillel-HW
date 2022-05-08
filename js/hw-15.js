/*В <input> можно что-то ввести, если нажать на кнопку 
то будет выведен alert c введенным в поле значением и после закрытия alert'а поле будет очищаться.*/

const containerRef = document.querySelector('.container');

const titleElement = document.createElement('h1');
const pElement = document.createElement('p');
const inputElement = document.createElement('input');
const buttonElement = document.createElement('button');

titleElement.textContent = 'Наталия Прыгунова';
pElement.textContent = 'Создаём страницу с элементами без использования html';
buttonElement.style.margin = '10px';
buttonElement.textContent = 'Ввод';

inputElement.addEventListener('click', () => {
  buttonElement.addEventListener('click', () => {
    alert(inputElement.value);
    inputElement.value = '';
    inputElement.removeEventListener('click', () => {});
  });
});

containerRef.append(titleElement, pElement, inputElement, buttonElement);
