const { models } = require("./index");
module.exports = {
  getMyIdea: async function (user_id) {
    return await models.Ideas.findAll({
      where: {
        user_id,
      },
    });
  },
  createIdea: async function (body) {
    return await models.Ideas.create({
      ...body,
    });
  },
  getIdeaById: async function (id) {
    return await models.Ideas.findByPk(id);
  },
  updateIdea: async function (id, body) {
    console.log(id);
    return await models.Ideas.update(
      { ...body },
      {
        where: {
          id,
        },
      }
    );
  },
  deleteIdea: async function (id) {
    return await models.Ideas.destroy({
      where: {
        id,
      },
    });
  },
  getallIdeas: async function () {
    return await models.Ideas.findAll();
  },
};
