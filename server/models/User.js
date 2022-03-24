module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isBlocked: {
      type: DataTypes.BOOLEAN,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
  });

  return User;
};
