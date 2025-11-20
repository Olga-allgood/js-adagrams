const handSize = 10;
const bonusMinLength = 7;
const lengthBonusPoints = 8;
const pairWord = 0;
const pairScore = 1;

const letterPool = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1,
  K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6,
  U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
};

const scoreChart = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

export const drawLetters = () => {
  // Implement this method for wave 1
  let allLetterOccurrences = [];
  let handOfLetters = [];

  for (const letter in letterPool) {
    const frequency = letterPool[letter];
    for (let i = 0; i < frequency; i++) {
      allLetterOccurrences.push(letter);
    }
  }

  while (handOfLetters.length < handSize) {
    const index = Math.floor(Math.random() * allLetterOccurrences.length);
    const lastIndex = allLetterOccurrences.length - 1;

    // swapping chosen element with last element so that we don't move elements each time 
    [allLetterOccurrences[index], allLetterOccurrences[lastIndex]] =
      [allLetterOccurrences[lastIndex], allLetterOccurrences[index]];

    // popping just the last element and adding to the hand - O(1) time complexiy 
    handOfLetters.push(allLetterOccurrences.pop());
  }

  return handOfLetters;
};

const createLetterFrequencyDict = (letters) => {
  const letterFrequencyDict = {};
  letters.forEach(letter => {
    letter = letter.toUpperCase();
    letterFrequencyDict[letter] = (letterFrequencyDict[letter] || 0) + 1;
  });
  return letterFrequencyDict;
};

// Wave 2: usesAvailableLetters
export const usesAvailableLetters = (word, letterBank) => {
  const upperWord = word.toUpperCase();
  const upperLetterBank = letterBank.map(letter => letter.toUpperCase());

  const wordDict = createLetterFrequencyDict(upperWord.split(''));
  const letterBankDict = createLetterFrequencyDict(upperLetterBank);

  for (const letter in wordDict) {
    if (!(letter in letterBankDict) || wordDict[letter] > letterBankDict[letter]) {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
