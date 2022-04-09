module.exports = (sequelize, DataTypes) => {

    let alias = "Product";
    let cols = {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          }, 
          price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
          },
          brand: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          variety: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          smell: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          origin: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          detail: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          category: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          information: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          packaging: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          image: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    }

    let config = {
        tableName: 'products',
        timestamps: false,
    }
    
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsToMany(models.Weight, {
            as: 'weights',
            through: 'weightsProducts',
            foreignKey: 'product',
            otherKey: 'weight',
            timestamps: false,
        })

        Product.belongsTo(models.Category, {
            as: 'categoryId',
            foreignKey: 'category',
        })

        Product.belongsTo(models.Brand, {
          as: 'brandId',
          foreignKey: 'brand',
      })

      Product.belongsTo(models.Image, {
        as: 'imageId',
        foreignKey: 'image',
    })
    
    }

    return Product;
}