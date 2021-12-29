import { Card } from 'models/card'

describe("Card", () => {
  describe("#constructor", () => {
    it('creates the card with the correct attributes', () => {
      const name = "Two of Swords";
      const suit = "Swords";
      const number = 2;
      const reversed = false;

      const card = new Card(name, suit, number, reversed);

      expect(card.name).toBe(name);
      expect(card.suit).toBe(suit);
      expect(card.number).toBe(number);
      expect(card.reversed).toBe(reversed);
      expect(card.friendlyId).toBe("two-of-swords");
    });
  });
});