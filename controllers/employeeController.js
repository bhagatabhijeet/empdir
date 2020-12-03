const db = require("../model");

module.exports = {
  getNonSensitiveData: async (req, res) => {
    try {
      const result = await db.Employee.find(
        {},
        // *** don't fetch password, salt, md5, sha1 and sha256 fields
        "-login.password -login.salt -login.md5 -login.sha1 -login.sha256"
      ).exec();
      res.json(result);
    } catch (e) {
      console.log("User Controller", e);
      res.status(401).json(e);
    }
  },
};
