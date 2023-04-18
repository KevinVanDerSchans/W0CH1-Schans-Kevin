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
    cardName: 5,
    number: 5,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 6,
    number: 6,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 7,
    number: 7,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 8,
    number: 8,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 9,
    number: 9,
    suit: 'swords',
    status: 0,
  },
  {
    cardName: 10,
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
    cardName: 2,
    number: 2,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 3,
    number: 3,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 4,
    number: 4,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 5,
    number: 5,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 6,
    number: 6,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 7,
    number: 7,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 8,
    number: 8,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 9,
    number: 9,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 10,
    number: 10,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 'J',
    number: 11,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 'Q',
    number: 12,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 'K',
    number: 13,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 'A',
    number: 14,
    suit: 'trebol',
    status: 0,
  },
  {
    cardName: 2,
    number: 2,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 3,
    number: 3,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 4,
    number: 4,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 5,
    number: 5,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 6,
    number: 6,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 7,
    number: 7,
    suit: 'diamonds',
    status: 0,
  },
    {
    cardName: 8,
    number: 8,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 9,
    number: 9,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 10,
    number: 10,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 'J',
    number: 11,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 'Q',
    number: 12,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 'K',
    number: 13,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 'A',
    number: 14,
    suit: 'diamonds',
    status: 0,
  },
  {
    cardName: 2,
    number: 2,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 3,
    number: 3,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 4,
    number: 4,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 5,
    number: 5,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 6,
    number: 6,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 7,
    number: 7,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 8,
    number: 8,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 9,
    number: 9,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 10,
    number: 10,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 'J',
    number: 11,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 'Q',
    number: 12,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 'K',
    number: 13,
    suit: 'hearts',
    status: 0,
  },
  {
    cardName: 'A',
    number: 14,
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
const overButton = document.querySelector(".over-button");
const underButton = document.querySelector(".under-button");
const gameQuestionMark = document.querySelector(".question-mark-game-card");
const userQuestionMark = document.querySelector(".user-mark-user-card");
const currentGameCard = document.querySelector(".current-game-card");
const currentUserCard = document.querySelector(".current-user-card");
const currentFeedbackToUser = document.querySelector(".feedback-to-user");
const userRounds = document.querySelector(".rounds-number");


const getRandomCard = (cards) => {
  let randomNumber = Math.floor(Math.random() * cards.length);
  let choosedRandomCard = cards[randomNumber];
  choosedCard.push(choosedRandomCard);
  choosedRandomCard.status = 1;
  currentGameCard.classList.remove("showOff");
  currentGameCard.textContent = `${choosedCard[0].cardName} ${choosedCard[0].suit}`;
};

const showUserCard = (cards) => {
  let randomNumberForuser = Math.floor(Math.random() * cards.length);
  let chooseRandomCardForUser = cards[randomNumberForuser];
  choosedUserCard.push(chooseRandomCardForUser);
  choosedUserCard.status = 1;
  gameQuestionMark.classList.add("showOff");
  userQuestionMark.classList.add("current-card-style");
  userQuestionMark.textContent = `${choosedUserCard[0].cardName} ${choosedUserCard[0].suit}`;
};

const resetGame = () => {
  choosedCard = [];
  choosedUserCard = [];
  getRandomCard(cards);
};

startButton.addEventListener("click", () => {
  startButton.remove();
  overAndUnderButton.classList.remove("showOff");
  gameQuestionMark.classList.add("showOff");
  getRandomCard(cards);
});

overButton.addEventListener("click", () => {
  showUserCard(cards);

  if (choosedCard[0].number === choosedUserCard[0].number) {
    currentFeedbackToUser.classList.remove("showOff");
    setTimeout(() => {
      currentFeedbackToUser.classList.add("showOff");
    }, 2500);
    currentFeedbackToUser.textContent = "TIE !";
    rounds++;
    userRounds.textContent = rounds;
    resetGame();
  };

  if (choosedCard[0].number < choosedUserCard[0].number) {
    currentFeedbackToUser.classList.remove("showOff");
    setTimeout(() => {
      currentFeedbackToUser.classList.add("showOff");
    }, 2500);
    currentFeedbackToUser.textContent = 'YOU WIN!... Congratulations!';
    rounds++;
    userRounds.textContent = rounds;
    resetGame();
  };

  if (choosedCard[0].number > choosedUserCard[0].number) {
    currentFeedbackToUser.classList.remove("showOff");
    setTimeout(() => {
      currentFeedbackToUser.classList.add("showOff");
    }, 2500);    
    currentFeedbackToUser.textContent = 'YOU LOOSE!... BOT WINS!';
    rounds++;
    userRounds.textContent = rounds;
    resetGame();
  };
});

underButton.addEventListener("click", () => {
  showUserCard(cards);

   if (choosedCard[0].number === choosedUserCard[0].number) {
    currentFeedbackToUser.classList.remove("showOff");
    setTimeout(() => {
      currentFeedbackToUser.classList.add("showOff");
    }, 2500);
    currentFeedbackToUser.textContent = "TIE !";
    rounds++;
    userRounds.textContent = rounds;
    resetGame();
  };

  if (choosedCard[0].number < choosedUserCard[0].number) {
    currentFeedbackToUser.classList.remove("showOff");
    setTimeout(() => {
      currentFeedbackToUser.classList.add("showOff");
    }, 2500);    
    currentFeedbackToUser.textContent = 'YOU LOOSE!... BOT WINS!'
    rounds++;
    userRounds.textContent = rounds;
    resetGame();
  };

  if (choosedCard[0].number > choosedUserCard[0].number) {
    currentFeedbackToUser.classList.remove("showOff");
    setTimeout(() => {
      currentFeedbackToUser.classList.add("showOff");
    }, 2500);
    currentFeedbackToUser.textContent = 'YOU WIN!... Congratulations!';
    rounds++;
    userRounds.textContent = rounds;
    resetGame();
  };
});
