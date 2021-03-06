'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    review: DataTypes.TEXT,
    UserId: DataTypes.INTEGER
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User)
    Post.belongsToMany(models.Tag, { through: 'PostTag' })
  };
  return Post;
};