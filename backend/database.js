import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const dev = process.env.DEVELOPMENT === "True" ? true : false;

/* Connect and authenticate */

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgresql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: dev ? false : true,
    },
  },
});

sequelize.authenticate();

/* Models */

const User = sequelize.define("user", {
  /* ATTRIBUTES */
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Sync all models with the database.
if (dev) {
  /*
   * Since production and development environments use the
   * same Heroku database, I assume changes will be synced.
   */
  sequelize.sync();
}

// Export models for use.
export { User };
