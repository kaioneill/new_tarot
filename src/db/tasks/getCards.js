import dotenv from 'dotenv'

import { db, DataTypes } from 'db'
import Card from 'db/models/card'
dotenv.config()

const getCards = async () => {
  const cards = await Card(db, DataTypes).findAll()
  console.log('All cards:', JSON.stringify(cards, null, 2))
}

getCards()
