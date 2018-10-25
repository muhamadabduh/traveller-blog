'use strict';
const num = 10
console.log(process.argv)
const faker = require('faker')
function generateFakePost(num) {
  let posts = []
  for (let i = 0; i < num; i++) {
    let obj = {
      title: faker.lorem.sentence(),
      image: faker.image.nature(),
      review: faker.lorem.text(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    posts.push(obj)
  }
  return posts
}

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
    return queryInterface.bulkInsert('Posts', generateFakePost(num))
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Posts', null)
  }
};
