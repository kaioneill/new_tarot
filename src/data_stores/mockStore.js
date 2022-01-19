import { MockCard } from 'mock_data/mockCard'

class MockStore {
  all () {
    return [
      MockCard.theSun(),
      MockCard.twoOfSwords(),
      MockCard.threeOfWandsReversed(),
      MockCard.theStar(),
      MockCard.queenOfPentaclesReversed(),
      MockCard.aceOfCups()
    ]
  }

  randomCard () {
    const allCards = this.all()
    return allCards[Math.floor(Math.random() * allCards.length)]
  }

  getCard (friendlyId) {
    return this.all().find((card) => card.friendlyId === friendlyId)
  }
}

export { MockStore }
