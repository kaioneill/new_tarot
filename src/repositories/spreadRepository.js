import { Spread } from 'models/spread'

class SpreadRepository {
  randomSpread () {
    const spread = new Spread(new Date().toLocaleDateString())
    spread.addRandomCards()
    return spread
  }
}

export { SpreadRepository }
