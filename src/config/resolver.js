import { SpreadRepository } from 'repositories/spreadRepository'

// returned object must respond to
// .buildSpread(req.body)
function resolveBuildSpreadFromParamsService() {
  return new BuildSpreadFromParamsService()
}

// returned object must respond to
// .randomSpread()
// .saveSpread(spread)
function resolveSpreadRepository() {
  return new SpreadRepository()
}

// returned object must respond to
// .byId(cardId)
function resolveCardRepository() {
  return null
}

export {
  resolveBuildSpreadFromParamsService,
  resolveSpreadRepository,
  resolveCardRepository
}