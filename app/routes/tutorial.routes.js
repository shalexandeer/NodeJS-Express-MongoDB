/* eslint-disable no-undef */
const {create, findAllTutorials, findTutorialsById, updateTutorialItem, deleteTutorialById} = require("./../controllers/tutorial.controller.js")


module.exports = app => {
    var router = require("express").Router();

    // create a new tutorial
    router.post("/", create)

    // update a tutorial with id
    router.put("/:id", updateTutorialItem)

    // retrieve all tutorials
    router.get("/", findAllTutorials)

    // retrieve tutorials by id
    router.get("/:id", findTutorialsById)

    // delete tutorials
    router.delete("/:id", deleteTutorialById)

    app.use('/api/tutorials', router)

}