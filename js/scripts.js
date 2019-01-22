$(document).ready(function() {

  var suits = ["clubs", "diamonds", "hearts", "spades"];
  var cardNames = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  suits.forEach(function(suit) {
    cardNames.forEach(function(cardname) {
      $("ul#cards").append("<li>" + cardname + " of " + suit + "</li>");
//        console.log(cardname + " of " + suit);
    });
  });
});
