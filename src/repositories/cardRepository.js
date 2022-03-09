class CardRepository {
  constructor (dataStore) {
    this.dataStore = dataStore
  }

  randomCard () {
    return this.dataStore.randomCard()
  }

  randomCards (numCards = 3) {
    const cards = []
    while (cards.length < numCards) {
      const newCard = this.randomCard()
      // dont allow duplicates
      if (cards.find((card) => card.name === newCard.name) == null) {
        cards.push(newCard)
      }
    }
    return cards
  }

  getCard (friendlyId) {
    return this.dataStore.getCard(friendlyId)
  }
}

export { CardRepository }
