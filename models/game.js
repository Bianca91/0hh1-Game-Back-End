'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game = sequelize.define('Game', {
    player: DataTypes.STRING,
    board: DataTypes.ARRAY,
    locked: DataTypes.ARRAY,
    sidebar: DataTypes.ARRAY
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};