import { CardRepository } from 'repositories/cardRepository'
import { MockStore } from 'data_stores/mockStore'

class FetchRandomCardsService {
  static executeCall (numCards = 3) {
    return new this(numCards).call()
  }

  constructor (numCards) {
    this.numCards = numCards
    this.repository = new CardRepository(new MockStore())
  }

  call () {
    const cards = []
    while (cards.length < this.numCards) {
      const newCard = this.repository.randomCard()
      // dont allow duplicates
      if (cards.find((card) => card.name === newCard.name) == null) {
        cards.push(newCard)
      }
    }
    return cards
  }
}

export { FetchRandomCardsService }
