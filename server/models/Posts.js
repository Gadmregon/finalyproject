module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    creator: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("tags").split(";");
      },
      set(val) {
        this.getDataValue("tags", val.join(";"));
      },
    },
    selectorFile: {
      type: DataTypes.STRING,
    },
    likeCount: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0,
    },
  });

  return Posts;
};
