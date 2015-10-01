console.log(game.tracer());

(function(globals) {
  var expect = chai.expect;

  it('should have a `game` in the `window`', function(){
    chai.expect(window.game).to.be.equal(game);
    chai.expect(game).is.an('object');
    chai.expect(game.board).to.a('function');
  });


  it('should give me a big array as the board', function () {
    var board = game.board();
    chai.expect(board).to.be.an('array');
    chai.expect(board).to.have.length(8);
    chai.expect(board[0]).to.be.a('array');
    chai.expect(board[0][0]).to.be.a('string');
    chai.expect(board[0][0]).to.equal('R');
  });


  it('should be able to move pieces', function () {
    // board[0][0] = board[0][1];
    game.applyMove(
      // { file: 'd', rank: 2 },
      { rank: 6, to: 3 }, // from
      // { file: 'd', rank: 4 }
      { rank: 4, to: 3 } // to
    );

    var board = game.board();
    // chai.expect(board[4][3]).to.be.equal('p');
    // chai.expect(moves[0].from.rank).to.equal(6);

    // chai.expect(game.applyMove()).to.deep.equal({rank: 6, file: 3});
  });

  it.skip('should be able to assign the from piece to null', function() {
    chai.expect(game.applyMove()).to.deep.equal(null);
  });


  it.skip('should be able to apply the move', function() {
    var board = game.board();
    chai.expect(board).to.be.an('array');
    chai.expect(board[6][3]).to.be.a('string');
    chai.expect(board[6][3]).to.equal('p');
  });

    console.log(game.applyMove()); //returns from value??? [6,3]


// it('should be able to fast forward', function () {
//   board[0][0] = board[0][1];
//
// });
//
// it.skip('should be able to advance to the next move', function () { //skips the test
//
//
// });


})(window || module && module.exports || this);
