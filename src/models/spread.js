class Spread {
  constructor (date) {
    this.date = date
    this.cards = []
  }

  addCard (card) {
    this.cards.push(card)
  }
}

export { Spread }
