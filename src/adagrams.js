const handSize = 10;

const letterPool = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1,
  K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6,
  U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
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

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
