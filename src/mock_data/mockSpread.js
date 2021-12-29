import { Spread } from 'models/spread'
import { Card } from 'models/card'

class MockSpread {
  static basicSpread () {
    const spread = new Spread('12/28/2021')
    const card1 = new Card('Two of Swords', 'swords', 2, false)
    const card2 = new Card('Devil', 'major', 15, true)
    const card3 = new Card('Eight of Cups', 'cups', 8, false)

    spread.addCard(card1)
    spread.addCard(card2)
    spread.addCard(card3)

    return spread
  }
}

export { MockSpread }
