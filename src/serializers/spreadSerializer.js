import { CardSerializer } from 'serializers/cardSerializer'

class SpreadSerializer {
  constructor (spread) {
    this.spread = spread
  };

  serialize () {
    return {
      date: this.spread.date,
      cards: this.spread.cards.map((card) => {
        return new CardSerializer(card).serialize()
      })
    }
  }
};

export { SpreadSerializer }
