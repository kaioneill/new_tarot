import { Card } from 'models/card'

class MockCard {
  static theSun () {
    return new Card('The Sun', 'major', 19, false)
  }

  static twoOfSwords () {
    return new Card('Two of Swords', 'swords', 2, false)
  }

  static threeOfWandsReversed () {
    return new Card('Three of Wands', 'wands', 3, true)
  }

  static theStar () {
    return new Card('The Star', 'major', 17, false)
  }

  static queenOfPentaclesReversed () {
    return new Card('Queen of Pentacles', 'pentacles', 13, true)
  }

  static aceOfCups () {
    return new Card('Ace of Cups', 'cups', 1, false)
  }
}

export { MockCard }
