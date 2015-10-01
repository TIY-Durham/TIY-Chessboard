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

  it.skip('should tell me what piece is at a position', function(){
    expect(game.pieceAt(6,3)).to.equal('p');
    expect(game.pieceAt(6,2)).to.equal('p');
    expect(game.pieceAt(4,3)).to.be.null;
    expect(game.pieceAt(0,0)).to.equal('R');
  });

  it('should move exactly one piece', function () {
    // Initialize the Environment...
    game.reset(); // Re-initialize the board...

    var board = game.board(); // Copy the board?

    // Test the Preconditions...
    expect(board[6][3]).to.equal('p');
    expect(board[4][3]).to.be.null;

    expect(game.tracer()).to.equal([
      '|R|N|B|Q|K|B|N|R|',
      '|P|P|P|P|P|P|P|P|',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '|p|p|p|p|p|p|p|p|',
      '|r|n|b|q|k|b|n|r|',
    ].join('\n') + '\n');

    // Action to change the world...
    expect(game.applyMove(
      { rank: 6, file: 3 }, // from
      { rank: 4, file: 3 }  // to
    )).to.equal(undefined);

    var board = game.board(); // Re-copy the board?

    // Test the Postconditions...
    chai.expect(board[6][3]).to.be.null;
    chai.expect(board[4][3]).to.be.equal('p');

    expect(game.tracer()).to.equal([
      '|R|N|B|Q|K|B|N|R|',
      '|P|P|P|P|P|P|P|P|',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | |p| | | | |',
      '| | | | | | | | |',
      '|p|p|p| |p|p|p|p|',
      '|r|n|b|q|k|b|n|r|',
    ].join('\n') + '\n');

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
