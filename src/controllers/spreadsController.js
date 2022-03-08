import { 
  resolveBuildSpreadFromParamsService,
  resolveSpreadRepository
} from 'config/resolver'

import { SpreadRepository } from 'repositories/spreadRepository'
import { SpreadSerializer } from 'serializers/spreadSerializer'

const random = (req, res) => {
  // TODO: refactor to use resolver
  const spread = new SpreadRepository().randomSpread()
  const response = new SpreadSerializer(spread).serialize()
  res.send(response)
}

const create = (req, res) => {
  const spread = resolveBuildSpreadFromParamsService().buildSpread(req.body)
  resolveSpreadRepository().saveSpread(spread)
  res.sendStatus(201)
}

export { random, create }
