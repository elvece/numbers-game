var code = require('../js/main.js');

//test as player

var player = new Player ("player1");

describe('first turn', function() {
  //AI picks 3
  it('shows player wins with 2 points', function() {
    if (player1.turnCount === 0) {
      player1.numbers[0] = 4;
    }
  });

  it('shows player wins with 1 point', function() {
    if (player1.turnCount === 0) {
      player1.numbers[0] = 1;
    }
  });

  it('shows tie, no points', function() {
    if (player1.turnCount === 0) {
      player1.numbers[0] = 3;
    }
  });

  it('shows AI wins with 2 points', function() {
    if (player1.turnCount === 0) {
      player1.numbers[0] = 2;
    }
  });

  it('shows AI wins with 1 point', function() {
    if (player1.turnCount === 0) {
      player1.numbers[0] = 5 || 6 || 7 || 8 || 9 || 10;
    }
  });
});

describe('second turn', function() {
  //AI picks 1
  it('shows player wins with 2 points', function() {
    if (player1.turnCount === 1) {
      player1.numbers[1] = 2;
    }
  });

  //impossible
  // it('shows player wins with 1 point', function() {
  // });

  it('shows tie, no points', function() {
    if (player1.turnCount === 1) {
      player1.numbers[1] = 1;
    }
  });

  it('shows AI wins with 2 points', function() {
    if (player1.turnCount === 1) {
      player1.numbers[1] = 2;
    }
  });

  //impossible
  // it('shows AI wins with 1 point', function() {
  // });
});

describe('third turn', function() {
  //AI picks 2
  it('shows player wins with 2 points', function() {
    if (player1.turnCount === 2) {
      player1.numbers[2] = 3;
    }
  });

  //impossible
  // it('shows player wins with 1 point', function() {
  // });

  it('shows tie, no points', function() {
    if (player1.turnCount === 2) {
      player1.numbers[2] = 2;
    }
  });

  it('shows AI wins with 2 points', function() {
    if (player1.turnCount === 2) {
      player1.numbers[2] = 1;
    }
  });

  it('shows AI wins with 1 point', function() {
    if (player1.turnCount === 2) {
      player1.numbers[2] = 4 || 5 || 6 || 7 || 8 || 9 || 10;
    }
  });
});

