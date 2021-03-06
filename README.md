**Archived,** see <https://github.com/RyanFleck/Xalgo-System-Prototype> for the latest prototype.

<br />


# Xalgo Tabular Editor

Web application for writing `.rule.xalgo` files in tabular format.

### Stack

1. **React** - Frontend/UI framework
1. **Express** - Backend framework
1. **PostgreSQL** - Sequelize for Heroku Postgres connection and ORM
1. **MongoDB** - MongoDB Atlas service
1. **Heroku** - Deployment
1. **Evergreen** - React component library

### Usage

**The following must be added to the .env file for your development environment to work:**

```
DATABASE_URL=<Postgres database URL>
MONGODB_URL=<MongoDB Atlas URL>
DEVELOPMENT=True
```

After this, you can use the following commands:

```sh
yarn install                 #Do this in root and frontend folder before beginning development.
yarn develop                 #Starts Express backend.
cd frontend && yarn start    #Starts react app.
```

### Resources

1. [Ant Design component guide](https://ant.design/components/overview/)
1. [Reach Router docs](https://reach.tech/router)
1. [MongoDB Atlas](https://cloud.mongodb.com)
1. [Heroku Dashboard](https://dashboard.heroku.com/apps/xalgo-editor-v3)
