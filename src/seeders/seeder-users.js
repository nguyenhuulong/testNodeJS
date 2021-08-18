'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456', // phải hash ra để không biết plain text 
      firstName: 'Long',
      lastName: 'Nguyen',
      address: 'Vietnam',
      gender: 1,
      roleId: 'R1',
      phoneNumber: '1234',
      positionId: 'P1',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
