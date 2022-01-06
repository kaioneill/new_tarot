import dotenv  from 'dotenv'
dotenv.config()

import { db, DataTypes } from 'db'
import Card from 'db/models/card'

const getCards = async () => {
  const cards = await Card(db, DataTypes).findAll()
  console.log("All cards:", JSON.stringify(cards, null, 2))
}

getCards()