import { Card } from 'models/card'

describe("Card", () => {
  describe("#constructor", () => {
    it('creates the card with the correct attributes', () => {
      const name = "Two of Swords";
      const suit = "Swords";
      const number = 2;

      const card = new Card(name, suit, number);

      expect(card.name).toBe(name);
      expect(card.suit).toBe(suit);
      expect(card.number).toBe(number);
      expect(card.friendlyId).toBe("two-of-swords");
    });
  });
});