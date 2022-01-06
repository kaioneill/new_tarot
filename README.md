# Tarot thing mkII

a test driven and vaguely domain driven api to help with tarot

node, express, potsgres, jest, supertest




### notes for me ha

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

bc babel is so confusing use this npx command prefix to run things from the command line, this one gets all the cards
```sh
npx babel-node --presets @babel/preset-env src/db/tasks/getCards
```