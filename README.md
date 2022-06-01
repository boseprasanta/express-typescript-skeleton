# express-typescript-skeleton

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Important sequlize Commands

Initiate inside a folder

```
npx sequelize-cli init
```
Create the DB
```
npx sequelize-cli db:create
```
Model Generation
```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```
DB Migration
```
npx sequelize-cli db:migrate
```

Create a migration file
```
npx sequelize-cli migration:generate --name add-column-phone-user
```
Resultant File Name:  <code>XXXXtimestampXXXX-add-column-phone-user.js</code>