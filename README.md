# Tarot thing mkII

a test driven and vaguely domain driven api to help with tarot

node, express, potsgres, jest, supertest


## use cases

some auth will need to come before all of these, likely passport with Auth0

### random (divine wisdom through code) spread

1. `GET /spreads/random`
  - no params, returns a spread with 3 cards
    - [x] with mock data
    - [ ] connect to db
2. `POST /spreads`
  - body params of the spread with cards (+ids) and any spread data like the date and user entered notes on the spread
    - [ ] with mock data
    - [ ] connect to db

### user built spread

1. `GET /spreads/new`
  - no params, returns spread with no cards
2. `POST /search/cards`
  - body params of search query, just card name to start
  - returns a list of cards with their ids (maybe other card data too)
3. `POST /spreads`
  - body params of the spread with cards (+ids) and any spread data like the date and user entered notes on the spread

### edit spread

1. `GET /spreads`
  - no params, returns a list of spreads for the current user
2. `GET /spread/:id`
  - path param of spread id, returns a spread with cards
3. `POST /search/cards`
  - body params of search query, just name to start
  - returns a list of cards with their ids (maybe other card data too)
4. `POST /spreads`
  - body params of the spread with cards (+ids) and any spread data like the date and user entered notes on the spread

### delete spread
1. `GET /spreads`
  - no params, returns a list of spreads for the current user
2. `DELETE /spread/:id`
  - path param of spread id, deletes the spread

## notes for me ha

create a new model
```sh
yarn sequelize model:generate --name Card --attributes name:string,suit:string,number:integer
```

run migrations
```sh
yarn sequelize db:migrate
```

create a new seeder
```sh
yarn sequelize seed:generate --name Card
```

run seeders
```sh
yarn sequelize db:seed:all
```

babel is so confusing use this npx command prefix to run things from the command line, this one gets all the cards in the db
```sh
npx babel-node --presets @babel/preset-env src/db/tasks/getCards
```