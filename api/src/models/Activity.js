const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true, 
    },
    name: {
      type: DataTypes.STRING,
    },
    difficulty:{
      type: DataTypes.INTEGER,
      validate:{
        min:1,
        max:5
      }          
    },  
    duration: {
        type: DataTypes.TIME,
    },
    season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
    }
  },{timestamps: false, tableName: ""});
};
