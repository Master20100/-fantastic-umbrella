// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      // Validates that the value is a decimal
      validate: {
        isDecimal: true
      },
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //Validates that the value is numeric
      validate: {
        isNumeric: true
      },
      //Set a default value of 10
      defaultValue: 10
    },
    category_id: {
      // References the category model's id
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    },

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
