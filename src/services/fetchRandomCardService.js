import { CardRepository } from 'repositories/cardRepository'
import { MockStore } from 'data_stores/mockStore'

class FetchRandomCardService {
  static executeCall () {
    return new this().call()
  }

  constructor () {
    this.repository = new CardRepository(new MockStore())
  }

  call () {
    return this.repository.randomCard()
  }
}

export { FetchRandomCardService }
