const db = require("../model");

module.exports = {
  getNonSensitiveData: async (req, res) => {
    try {
      const result = await db.Employee.find(
        {},
        "-login.password -login.salt -login.md5 -login.sha1 -login.sha256"
      ).exec();
      res.json(result);
    } catch (e) {
      console.log("User Controller", e);
      res.status(401).json(e);
    }
  },
};
