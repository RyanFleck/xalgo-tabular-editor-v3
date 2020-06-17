# React-Express-Heroku Template

Simple template for quickly spinning up a frontend and backend on Heroku. Utilizes **Sequelize** for Heroku Postgres interaction.

### Stack

1. **React** - Frontend/UI framework
1. **Express** - Backend framework
1. **Sequelize** - Database connection and ORM
1. **Heroku** - Deployment

### Usage

Use the template to start a new repository, deploy the application via _Heroku_, and add the _Heroku Postgres_ addon. Once this is done, you can copy the `DATABASE_URL` environment variable from your _Heroku_ env-vars to a local `.env` file.

**The following must be added to the .env file for your development environment to work:**

```
DATABASE_URL=<Postgres database URL>
DEVELOPMENT=True
```

After this, you can use the following commands:

```sh
yarn install                 #Do this in root and frontend folder before beginning development.
yarn develop                 #Starts Express backend.
cd frontend && yarn start    #Starts react app.
```
