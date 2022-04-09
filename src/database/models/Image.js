module.exports = (sequelize, DataTypes) => {

    let alias = "Image";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          url: {
            type: DataTypes.STRING,
            allowNull: false,
          }, 
    }

    let config = {
        tableName: 'images',
        timestamps: false,
    }
    
    const Image = sequelize.define(alias, cols, config);

    Image.associate = function (models) {
      Image.hasMany(models.Product, {
          as: 'products',
          foreignKey: 'image'
      })
  }

    return Image;
}