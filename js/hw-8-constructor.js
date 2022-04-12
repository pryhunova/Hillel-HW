'use strict';
const buttonRef = document.querySelector('#btn');
const hotelRef = document.querySelector('#hotel');

const hotel = {
  hotelName: 'Odesa Hotel',
  orderList: [],
  orderConfig: {
    accommodation: ['Room', 'Apartments', 'Cottage'],
    transfer: ['Yes', 'No'],
    breakfast: ['Yes', 'No'],
  },
};

buttonRef.addEventListener('click', () => {
  const guestName = prompt('Please, enter your name:', '');
  const amount = +prompt('Please, enter the amount of guests.', '');
  const order = {};

  for (let option in hotel.orderConfig) {
    if (hotel.orderConfig.hasOwnProperty(option)) {
      order[option] = prompt(
        `Please, choose the options ${option}: ${hotel.orderConfig[option]}.`,
        '',
      );
    }
  }
  hotel.orderList.push(guestName, amount, order);
});

console.log(hotel.orderList);

function addOrderToHTML() {
  hotelRef.insertAdjacentHTML(
    'beforeend',
    `<p>Hello, ${guestName}! Wellcome to ${hotel.hotelName}.</p><p>Amount of guests: ${amount}</p><p>Details of your order. ${option}: ${order[option]}<p>`,
  );
}
addOrderToHTML();
