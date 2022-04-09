module.exports = (sequelize, DataTypes) => {

  let alias = "User";
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
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    avatar: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    isAdmin: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    }, 
  }

  let config = {
      tableName: 'users',
      timestamps: false,
  }
  
  const User = sequelize.define(alias, cols, config);

  User.associate = function(models) {
    User.belongsTo(models.Image, {    
    as: 'image', 
    foreignKey: 'avatar',
    })

}    

  return User;
}