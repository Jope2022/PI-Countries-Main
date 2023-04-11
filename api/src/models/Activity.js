const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity', {
  countryId: {
      type: DataTypes.STRING,
      primaryKey: true, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty:{
      type: DataTypes.INTEGER,
      allowNull: false,
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
