class CardSerializer {
  constructor (card) {
    this.card = card
  };

  serialize () {
    return {
      name: this.card.name,
      suit: this.card.suit,
      number: this.card.number,
      reversed: this.card.reversed,
      friendlyId: this.card.friendlyId
    }
  }
};

export { CardSerializer }
