import { FetchRandomCardsService } from 'services/fetchRandomCardsService'

class Spread {
  constructor (date) {
    this.date = date
    this.cards = []
  }

  addRandomCards () {
    this.cards = FetchRandomCardsService.executeCall()
  }

  addCard (card) {
    this.cards.push(card)
  }
}

export { Spread }
