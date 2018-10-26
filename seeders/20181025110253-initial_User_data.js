'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users', 
  [
    {
      name: 'Wiro Sableng',
      username: 'wirosableng',
      password: '12345',
    },
    {
      name: 'Shinto Gendeng',
      username: 'shintogendeng',
      password: '12345',
    },
    {
      name: 'Superman',
      username: 'superman',
      password: '12345',
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {})
  }
};
