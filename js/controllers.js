(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  // document.querySelector(SELECTOR)
  //   .addEventListener(TYPE, CALLBACK);
  // AKA
  // jQuery(SELECTOR).on(TYPE, CALLBACK);
  // Where CALLBACK is...
  function CALLBACK (EVENT){

    // Do something with Models and Views...
    // Maybe do something with EVENT...?
  }


  // Controller for "next move"...
  jQuery('#next').on('click', function(event){
      alert('next move');

    // TODO: Tell the Model -- `game` -- to advance to the next move...
      game.applyMove();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
      $('#D2') = $('#D4');
  });

  // Controller for "previous move"...
  jQuery('#previous').on('click', function(event){
      alert('previous move');
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery('#fast-forward').on('click', function(event){
      alert('fast-forward');
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery('#reset').on('click', function(event){
    // Fire tracer bullet!
      alert('backward');
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
      // $('game')
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this);
