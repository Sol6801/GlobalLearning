type Suit = "hearts" | "diamonds" | "clubs" | "spades";

interface Card {
  value: number;
  suit: Suit;
}

class Deck {
  private cards: Card[] = [];

  constructor() {
    const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
    suits.forEach((suit) => {
      for (let value = 1; value <= 13; value++) {
        this.cards.push({ value, suit });
      }
    });
  }

  shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(numCards: number): Card[] {
    if (numCards > this.cards.length) {
      throw new Error("No hay suficientes cartas en la baraja");
    }
    return this.cards.splice(0, numCards);
  }
}

class CardGame {
  private deck: Deck;
  private players: Card[][];

  constructor(numPlayers: number) {
    this.deck = new Deck();
    this.players = [];
    this.deck.shuffle();

    for (let i = 0; i < numPlayers; i++) {
      this.players.push(this.deck.deal(5));
    }
  }

  private getCardValue(card: Card): number {
    return card.value === 1 ? 14 : card.value;
  }

  playRound(): string {
    if (this.players.length === 0) {
      return "No hay jugadores en el juego";
    }

    let maxCard: Card | null = null;
    let winnerPlayer: number = -1;

    this.players.forEach((player, i) => {
      const playerCard = player.pop()!;
      console.log(
        `Jugador ${i + 1} juega: ${playerCard.value} de ${playerCard.suit}`
      );

      if (
        maxCard === null ||
        this.getCardValue(playerCard) > this.getCardValue(maxCard)
      ) {
        maxCard = playerCard;
        winnerPlayer = i;
      }
    });

    if (winnerPlayer === -1) {
      return "Empate - no hay ganador en esta ronda";
    }

    return `Jugador ${winnerPlayer + 1} gana la ronda`;
  }
}

const numPlayers = 4;

const cardGame = new CardGame(numPlayers);

for (let round = 1; round <= 5; round++) {
  console.log(`\n### Ronda ${round} ###`);
  const result = cardGame.playRound();
  console.log(result);
}
