export default (sequelize, DataTypes) => {
  const User = sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.SMALLINT,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.SMALLINT,
        email: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
  );
  return User;
};
