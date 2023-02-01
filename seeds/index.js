const sequelize = require('../config/connections');
const seedUsers = require('./user');
const seedRecipes = require('./recipes');

const seedAll = async () => {
  await sequelize.sync({ force: true }); //Using sequelize to sync the models to the database

  await seedUsers(); //Seeds user data

  //await seedRecipes(); //Seeds recipe data

  process.exit(0);
};

seedAll();