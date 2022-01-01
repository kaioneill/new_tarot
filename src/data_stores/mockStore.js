import { MockCard } from 'mock_data/mockCard'

class MockStore {
  randomCard () {
    return MockCard.theSun()
  }

  getCard (friendlyId) {
    return MockCard.twoOfSwords()
  }
}

export { MockStore }
