class Card {
  constructor (name, suit, number, reversed) {
    this.name = name
    this.suit = suit
    this.number = number
    this.reversed = reversed
    this.friendlyId = name.toLowerCase().replace(/\s/g, '-')
  }
}

export { Card }
