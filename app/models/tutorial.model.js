module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING // nvarchar
      },
      description: {
        type: Sequelize.STRING // nvarchar
      },
      published: {
        type: Sequelize.BOOLEAN // bit (0, 1)
      }
    });
  
    return Tutorial;
  };