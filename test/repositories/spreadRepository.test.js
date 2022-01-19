import { SpreadRepository } from 'repositories/spreadRepository'
import { Spread } from 'models/spread'

describe('SpreadRepository', () => {
  const repo = new SpreadRepository()

  describe('#randomSpread', () => {
    it('returns a random spread', () => {
      expect(repo.randomSpread()).toBeInstanceOf(Spread)
    })
  })
})
