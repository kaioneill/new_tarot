class CardRepository {
  constructor (dataStore) {
    this.dataStore = dataStore
  }

  randomCard () {
    return this.dataStore.randomCard()
  }

  getCard (friendlyId) {
    return this.dataStore.getCard(friendlyId)
  }
}

export { CardRepository }
