'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: DataTypes.UUID,
      },
      name: {
        type: DataTypes.STRING(50)
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

    }, {
      freezeTableName: true,
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('User');
  }
};