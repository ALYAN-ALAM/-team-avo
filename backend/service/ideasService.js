const ideasModel = require("../model/ideasModel");
// const ideaModel = require("../model/ideasModel");
const bcrypt = require("bcryptjs");
const userModel = require("../model/userModel");
module.exports = {
  createIdea: async function (body) {
    try {
      const response = await ideasModel.createIdea(body);

      return "Idea Create.";
    } catch (error) {
      console.log(error);
    }
  },

  updateIdea: async function (id, body) {
    try {
      // console.log(id);
      // console.log(body);
      const getUser = await userModel.getUserById(id);
      // console.log(getUser);
      if (getUser) {
        const getIdea = await ideasModel.getMyIdea(id);

        if (getIdea) {
          const response = await ideasModel.updateIdea(
            getIdea[0].dataValues.id,
            body
          );
          return "Idea Updated.";
        } else {
          return "Idea does not  exist";
        }
      } else {
        return "User does not  exist";
      }
    } catch (e) {
      return e;
    }
  },
  getMyIdea: async (user_id) => {
    try {
      const response = await ideasModel.getMyIdea(user_id);
      if (response) {
        return response;
      }
      return "Ideas does not  exist";
    } catch (e) {
      console.log(e);
    }
  },
  deleteIdea: async (id) => {
    try {
      console.log(id);
      const idea = await ideasModel.getIdeaById(id);
      console.log(idea);

      if (!idea) {
        return "Idea does not  exist";
      }
      await ideasModel.deleteIdea(id);

      return "Idea delete Succcessfully.";
    } catch (e) {
      console.log(e);
    }
  },
  getallIdeas: async () => {
    try {
      const response = await ideasModel.getallIdeas();
      if (response) {
        return response;
      }
      return "Store does not  exist";
    } catch (error) {
      const response = { Status: "Failure", Details: "Bad Request" };
      return response;
    }
  },
};
