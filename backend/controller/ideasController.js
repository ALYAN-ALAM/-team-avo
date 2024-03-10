const ideasService = require("../service/ideasService");
// const { schema } = require("./validationSchema/ideasService");

module.exports = {
  createIdea: async function (req, res) {
    try {
      const response = await ideasService.createIdea(req.body);
      res.send(response);
    } catch (e) {
      const response = { Status: "Failure", Details: e.message };
      return res.status(400).send(response);
    }
  },
  deleteIdea: async function (req, res) {
    // console.log(1);

    try {
      const { id } = req.params;

      console.log(id);
      const response = await ideasService.deleteIdea(id);
      res.send(response);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  updateIdea: async function (req, res) {
    try {
      const id = req.query.user_id;
      // console.log(id);
      const response = await ideasService.updateIdea(id, req.body);

      res.send(response);
    } catch (e) {
      const response = { Status: "Failure", Details: e.message };
      return res.status(400).send(response);
    }
  },
  getMyIdea: async function (req, res) {
    try {
      const user_id = req.body.user_id;
      const response = await ideasService.getMyIdea(user_id);
      res.send(response);
    } catch (e) {
      const response = { Status: "Failure", Details: e.message };
      return res.status(400).send(response);
    }
  },
  getallIdeas: async function (req, res) {
    try {
      const response = await ideasService.getallIdeas();
      res.send(response);
    } catch (e) {
      const response = { Status: "Failure", Details: e.message };
      return res.status(400).send(response);
    }
  },
};
