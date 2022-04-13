module.exports = (app) => {
  const appraisal = require("../controllers/appraisal");
  var router = require("express").Router();

  router.post("/", appraisal.create);
  router.get("/", appraisal.findAll);
  router.get("/:id", appraisal.findOne);
  router.put("/:id", appraisal.update);
  router.delete("/:id", appraisal.delete);
  router.delete("/", appraisal.deleteAll);
  app.use("/api/appraisal", router);
};
