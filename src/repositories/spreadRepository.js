import { Spread } from 'models/spread'
import { resolveFetchCardsService } from 'config/resolver'

class SpreadRepository {
  randomSpread () {
    const spread = new Spread(new Date().toLocaleDateString())
    spread.cards = resolveFetchCardsService().randomCards(3)
    return spread
  }

  saveSpread (spread) {
    // TODO: write this
  }
}

export { SpreadRepository }
