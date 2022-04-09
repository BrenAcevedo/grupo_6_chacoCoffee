module.exports = (sequelize, DataTypes) => {

    let alias = "Weight";
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
    }

    let config = {
        tableName: 'weights',
        timestamps: false,
    }
    
    const Weight = sequelize.define(alias, cols, config);

    Weight.associate = function (models) {
        Weight.belongsToMany(models.Product, {
            as: 'products',
            through: 'weightsProducts',
            foreignKey: 'weight',
            otherKey: 'product', 
            timestamps: false,
        })
    }

    return Weight;
}