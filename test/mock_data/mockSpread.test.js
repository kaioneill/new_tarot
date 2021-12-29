import { MockSpread } from 'mock_data/mockSpread'

describe('MockSpread', () => {
  describe('#basicSpread', () => {
    it('returns a basic spread', () => {
      const spread = MockSpread.basicSpread()

      expect(spread.cards.length).toBe(3)
      expect(spread.cards[0].name).toBe('Two of Swords')
    })
  })
})
