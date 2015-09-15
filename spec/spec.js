var code = require('../js/main.js');

//test as player

describe('first turn', function() {
  //AI picks 3
  it('shows player wins with 2 points', function() {
    if (player1.turnCount === 0) {
      expect(player1.numbers[0]).toEqual(4);
    }

  });

  it('shows player wins with 1 point', function() {
    if (player1.turnCount === 0) {
      expect(player1.numbers[0]).toEqual(1);
    }
  });

  it('shows tie, no points', function() {
    if (player1.turnCount === 0) {
      expect(player1.numbers[0]).toEqual(3);
    }
  });

  it('shows AI wins with 2 points', function() {
    if (player1.turnCount === 0) {
      expect(player1.numbers[0]).toEqual(2);
    }
  });

  it('shows AI wins with 1 point', function() {
    if (player1.turnCount === 0) {
      expect(player1.numbers[0]).toEqual(5 || 6 || 7 || 8 || 9 || 10);
    }
  });
});

describe('second turn', function() {
  //AI picks 1
  it('shows player wins with 2 points', function() {
    if (player1.turnCount === 1) {
      expect(player1.numbers[1]).toEqual(2);
    }
  });

  //impossible
  // it('shows player wins with 1 point', function() {
  // });

  it('shows tie, no points', function() {
    if (player1.turnCount === 1) {
      expect(player1.numbers[1]).toEqual(1);
    }
  });

  it('shows AI wins with 2 points', function() {
    if (player1.turnCount === 1) {
      expect(player1.numbers[1]).toEqual(2);
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
      expect(player1.numbers[2]).toEqual(3);
    }
  });

  //impossible
  // it('shows player wins with 1 point', function() {
  // });

  it('shows tie, no points', function() {
    if (player1.turnCount === 2) {
      expect(player1.numbers[2]).toEqual(2);
    }
  });

  it('shows AI wins with 2 points', function() {
    if (player1.turnCount === 2) {
      expect(player1.numbers[2]).toEqual(1);
    }
  });

  it('shows AI wins with 1 point', function() {
    if (player1.turnCount === 2) {
      expect(player1.numbers[2]).toEqual(4 || 5 || 6 || 7 || 8 || 9 || 10);
    }
  });
});

describe('AI evaluation', function() {
  it('when player1 first choice is 1', function() {

  });
});

describe('AI calculate choice weight', function() {
  it('when AI choice is 1 and player1 choice is 2', function() {
    //player1.numbers = [4, 2, 3];//player1 has 4 pts
    //AI has numbers left [4,5,6,7,8,9,10]
    //player 1 numbers left [1,5,6,7,8,9,10]
    expect(Ai.player1.calculateChoiceWeight(4, player1.numbers)).toEqual({});
    expect(Ai.player1.calculateChoiceWeight(5, player1.numbers)).toEqual({});


  });
});



