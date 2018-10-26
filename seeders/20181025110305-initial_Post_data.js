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
   return queryInterface.bulkInsert('Posts', 
  [
    {
      title: 'Yogyakarta',
      image: 'a1',
      review: '9/10'
    },
    {
      title: 'Bali',
      image: 'a2',
      review: '10/10'
    },
    {
      title: 'Delta Spa',
      image: 'a3',
      review: '11/10'
    },
    {
      title: 'Pasar Kaget',
      image: 'a4',
      review: 'bikin kaget'
    },
    {
      title: 'Gotham City',
      image: 'a5',
      review: '9/10'
    },
  ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Posts', null, {})
  }
};
