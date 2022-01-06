import { Sequelize, DataTypes } from 'sequelize'
import dotenv  from 'dotenv'
dotenv.config()

const db = new Sequelize(process.env.PGURL)

export { db, DataTypes }