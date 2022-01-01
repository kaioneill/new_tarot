import { Card } from 'models/card'

class MockCard {
  static theSun () {
    return new Card('The Sun', 'major', 19, false)
  }

  static twoOfSwords () {
    return new Card('Two of Swords', 'swords', 2, false)
  }
}

export { MockCard }
