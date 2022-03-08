import { resolveCardRepository } from 'config/resolver'
import { Spread } from 'models/spread'

class BuildSpreadFromParamsService {
  buildSpread(params) {
    const spreadParams = params.spread
    const cardsParams = spreadParams.cards_attributes
    
    const spread = new Spread(spreadParams.date)
    const cards = cardsParams.map(
      cardParams => resolveCardRepository().byId(cardParams.id)
    )
    cards.forEach(card => spread.addCard(card))

    return spread
  }
}

export { BuildSpreadFromParamsService }