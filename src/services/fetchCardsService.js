class FetchCardsService {
  constructor (repository) {
    this.repository = repository
  }

  randomCards (numCards = 3) {
    return this.repository.randomCards(numCards)
  }
}

export { FetchCardsService }
