import { SpreadRepository } from 'repositories/spreadRepository'
import { BuildSpreadFromParamsService } from 'services/buildSpreadFromParamsService'
import { FetchCardsService } from 'services/fetchCardsService'

// returned object must respond to
// .buildSpread(req.body)
const resolveBuildSpreadFromParamsService = () => {
  return new BuildSpreadFromParamsService()
}

// returned object must respond to
// .randomSpread()
// .saveSpread(spread)
const resolveSpreadRepository = () => {
  return new SpreadRepository()
}

// returned object must respond to
// .byId(cardId)
const resolveCardRepository = () => {
  return null
}

// returned object must respond to
// .randomCards(numCards = 3)
const resolveFetchCardsService = () => {
  return new FetchCardsService()
}

export {
  resolveBuildSpreadFromParamsService,
  resolveSpreadRepository,
  resolveCardRepository,
  resolveFetchCardsService
}
