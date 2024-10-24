function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var Deck = /*#__PURE__*/ function() {
    "use strict";
    function Deck() {
        var _this = this;
        _class_call_check(this, Deck);
        _define_property(this, "cards", []);
        var suits = [
            "hearts",
            "diamonds",
            "clubs",
            "spades"
        ];
        suits.forEach(function(suit) {
            for(var value = 1; value <= 13; value++){
                _this.cards.push({
                    value: value,
                    suit: suit
                });
            }
        });
    }
    _create_class(Deck, [
        {
            key: "shuffle",
            value: function shuffle() {
                for(var i = this.cards.length - 1; i > 0; i--){
                    var j = Math.floor(Math.random() * (i + 1));
                    var ref;
                    ref = [
                        this.cards[j],
                        this.cards[i]
                    ], this.cards[i] = ref[0], this.cards[j] = ref[1], ref;
                }
            }
        },
        {
            key: "deal",
            value: function deal(numCards) {
                if (numCards > this.cards.length) {
                    throw new Error("No hay suficientes cartas en la baraja");
                }
                return this.cards.splice(0, numCards);
            }
        }
    ]);
    return Deck;
}();
var CardGame = /*#__PURE__*/ function() {
    "use strict";
    function CardGame(numPlayers) {
        _class_call_check(this, CardGame);
        _define_property(this, "deck", void 0);
        _define_property(this, "players", void 0);
        this.deck = new Deck();
        this.players = [];
        this.deck.shuffle();
        //**/
        for(var i = 0; i < numPlayers; i++){
            this.players.push(this.deck.deal(5));
        }
    }
    _create_class(CardGame, [
        {
            key: "getCardValue",
            value: function getCardValue(card) {
                // Si la carta es un As, tratamos su valor como 14 para que sea la más alta.
                return card.value === 1 ? 14 : card.value;
            }
        },
        {
            key: "playRound",
            value: function playRound() {
                var _this = this;
                if (this.players.length === 0) {
                    return "No hay jugadores en el juego";
                }
                var maxCard = null;
                var winnerPlayer = -1;
                this.players.forEach(function(player, i) {
                    var playerCard = player.pop();
                    console.log("Jugador ".concat(i + 1, " juega: ").concat(playerCard.value, " de ").concat(playerCard.suit));
                    if (maxCard === null || _this.getCardValue(playerCard) > _this.getCardValue(maxCard)) {
                        maxCard = playerCard;
                        winnerPlayer = i;
                    }
                });
                if (winnerPlayer === -1) {
                    return "Empate - no hay ganador en esta ronda";
                }
                return "Jugador ".concat(winnerPlayer + 1, " gana la ronda");
            }
        }
    ]);
    return CardGame;
}();
var numPlayers = 4;
var cardGame = new CardGame(numPlayers);
for(var round = 1; round <= 5; round++){
    console.log("\n### Ronda ".concat(round, " ###"));
    var result = cardGame.playRound();
    console.log(result);
}
