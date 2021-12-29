import { Card } from 'models/card'

class MockCard {
  static basicCard () {
    return new Card('The Sun', 'major', 19, false)
  }
}

export { MockCard }
