const cards = [
  {
    cardName: 2,
    number: 2,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 3,
    number: 3,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 4,
    number: 4,
    suit: 'swords',
    status: 0,
  },
  {
    number: 5,
    suit: 'swords',
    status: 0,
  },
  {
    number: 6,
    suit: 'swords',
    status: 0,
  },
    {
    number: 7,
    suit: 'swords',
    status: 0,
  },
    {
    number: 8,
    suit: 'swords',
    status: 0,
  },
  {
    number: 9,
    suit: 'swords',
    status: 0,
  },
  {
    number: 10,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 'J',
    number: 11,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 'Q',
    number: 12,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 'K',
    number: 13,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 'A',
    number: 14,
    suit: 'swords',
    status: 0,
  },
  {
    number: 2,
    suit: 'trebol',
    status: 0,
  },
  {
    number: 3,
    suit: 'trebol',
    status: 0,
  },
  {
    number: 4,
    suit: 'trebol',
    status: 0,
  },
  {
    number: 5,
    suit: 'trebol',
    status: 0,
  },
  {
    number: 6,
    suit: 'trebol',
    status: 0,
  },
    {
    number: 7,
    suit: 'trebol',
    status: 0,
  },
    {
    number: 8,
    suit: 'trebol',
    status: 0,
  },
  {
    number: 9,
    suit: 'trebol',
    status: 0,
  },
  {
    number: 10,
    suit: 'trebol',
    status: 0,
  },
  {
    number: 'J',
    suit: 'trebol',
    status: 0,
  },
  {
    number: 'Q',
    suit: 'trebol',
    status: 0,
  },
  {
    number: 'K',
    suit: 'trebol',
    status: 0,
  },
  {
    number: 'A',
    suit: 'trebol',
    status: 0,
  },
    {
    number: 2,
    suit: 'diamonds',
    status: 0,
  },
  {
    number: 3,
    suit: 'diamonds',
    status: 0,
  },
  {
    number: 4,
    suit: 'diamonds',
    status: 0,
  },
  {
    number: 5,
    suit: 'diamonds',
    status: 0,
  },
  {
    number: 6,
    suit: 'diamonds',
    status: 0,
  },
    {
    number: 7,
    suit: 'diamonds',
    status: 0,
  },
    {
    number: 8,
    suit: 'diamonds',
    status: 0,
  },
  {
    number: 9,
    suit: 'diamonds',
    status: 0,
  },
  {
    number: 10,
    suit: 'diamonds',
    status: 0,
  },
  {
    number: 'J',
    suit: 'diamonds',
    status: 0,
  },
  {
    number: 'Q',
    suit: 'diamonds',
    status: 0,
  },
  {
    number: 'K',
    suit: 'diamonds',
    status: 0,
  },
  {
    number: 'A',
    suit: 'diamonds',
    status: 0,
  },
      {
    number: 2,
    suit: 'hearts',
    status: 0,
  },
  {
    number: 3,
    suit: 'hearts',
    status: 0,
  },
  {
    number: 4,
    suit: 'hearts',
    status: 0,
  },
  {
    number: 5,
    suit: 'hearts',
    status: 0,
  },
  {
    number: 6,
    suit: 'hearts',
    status: 0,
  },
    {
    number: 7,
    suit: 'hearts',
    status: 0,
  },
    {
    number: 8,
    suit: 'hearts',
    status: 0,
  },
  {
    number: 9,
    suit: 'hearts',
    status: 0,
  },
  {
    number: 10,
    suit: 'hearts',
    status: 0,
  },
  {
    number: 'J',
    suit: 'hearts',
    status: 0,
  },
  {
    number: 'Q',
    suit: 'hearts',
    status: 0,
  },
  {
    number: 'K',
    suit: 'hearts',
    status: 0,
  },
  {
    number: 'A',
    suit: 'hearts',
    status: 0,
  },
];

let choosedCard = [];
let choosedUserCard = [];
let score = 0;
let rounds = 0;

const startButton = document.querySelector(".start");
const overAndUnderButton = document.querySelector(".buttons-container");
const gameQuestionMark = document.querySelector(".question-mark-game-card");
const userQuestionMark = document.querySelector(".question-mark-user-card");

const currentGameCard = document.querySelector(".current-game-card");

const getRandomCard = (cards) => {
  let randomNumber = Math.floor(Math.random() * cards.length);
  let choosedRandomCard = cards[randomNumber];
  choosedCard.push(choosedRandomCard);
  choosedRandomCard.status = 1;
  currentGameCard.classList.remove("showOff");
  currentGameCard.textContent = `${choosedCard[0].number} ${choosedCard[0].suit}`;
};
















startButton.addEventListener("click", () => {
  startButton.remove();
  overAndUnderButton.classList.remove("showOff");
  gameQuestionMark.classList.add("showOff");
  userQuestionMark.classList.add("showOff");
  getRandomCard(cards);
})
