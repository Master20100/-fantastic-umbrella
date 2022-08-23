// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    price:{
      // Validates that the value is a decimal
type:DataTypes.DECIMAL,
allowNull:false
    },
   stock:{
     // Set a default value of 10
     // Validates that the value is numeric
    type:DataTypes.INTEGER,
    allowNull:false
  },
    category_id:{
      // References the category model's id
      type:DataTypes.INTEGER,
    }

    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
