const { User } = require('../models');

const userData = [
    {
        //static data 
        //generating som edata before starting application
        userName: 'jag',
        password: '1209'
  
      },
      {
          userName: 'MPonte',
          password: '1337'
    
      },
      {
          userName: 'sarafN',
          password: '6666'
    
      } 
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;