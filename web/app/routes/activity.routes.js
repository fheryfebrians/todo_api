module.exports = app => {
    const activity = require('../controllers/activity.controller');
  
    var router = require("express").Router();
  
    router.post("/", activity.create);
  
    router.get("/", activity.findAll);
  
    router.get("/:id", activity.findOne);
  
    router.put("/:id", activity.update);
  
    router.delete("/:id", activity.delete);
  
    app.use('/activity-groups', router);
  };