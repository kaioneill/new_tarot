import { SpreadRepository } from 'repositories/spreadRepository'
import { SpreadSerializer } from 'serializers/spreadSerializer'

const random = (req, res) => {
  const spread = new SpreadRepository().randomSpread()
  const response = new SpreadSerializer(spread).serialize()
  res.send(response)
}

export { random }
