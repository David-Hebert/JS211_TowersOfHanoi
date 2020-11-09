// 'use strict';

// let assert = require('assert');
// let readline = require('readline');
// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let startStack = stacks

// Start here. What is this function doing?
let printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
let movePiece = () => {
  return stacks[endStack].push(stacks[startStack].pop())

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
let isLegal = () => {
  // Your code here
  let lastStartValue = startStack[startStack.length -1]
  let lastEndValue = endStack[endStack.length -1]
  console.log(lastStartValue, lastEndValue)
  if ((lastStartValue < lastEndValue) || (lastEndValue === undefined)){
    return true
  } else {
    return false
  }
};


// What is a win in Towers of Hanoi? When should this function run?
let checkForWin = () => {
  // Your code here
  let checkForWin = () => {
    if (stacks.b.length == 4) {
      console.log("You win!");
      return true;
    } else {
      return false;
    }
  };

// When is this function called? What should it do with its argument?
let towersOfHanoi = (startStack, endStack) => {
  // Your code here
  let firstStack = stacks[startStack]
  let secondStack = stacks[endStack]

if (isLegal(firstStack, secondStack)){
  movePiece(firstStack, secondStack)
  } else if(!isLegal(firstStack, secondStack)) {
    console.log('Not a legal move');
  }
};

}

let getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
