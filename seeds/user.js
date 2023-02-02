const { User } = require('../models');

const userData = [
    {
        //static data 
        //generating som edata before starting application
        username: 'jag',
        password: '1209'
  
      },
      {
          username: 'MPonte',
          password: '1337'
    
      },
      {
          username: 'sarafN',
          password: '6666'
    
      } 
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;