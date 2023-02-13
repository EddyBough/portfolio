const projectRouter = require("express").Router() // Constante pour créer un routeur qui a pour nom projectRouter
const projectModel = require("../models/projectModel")
const upload = require("../services/uploaderImg")

projectRouter.get("/", async (req, res) => {
    let projects = await projectModel.find()
    res.render("main.twig", {
        projects: projects
    })

})

projectRouter.get("/addProject", async (req, res) => {
    res.render("addprojects.twig")

})

projectRouter.post("/addProject", upload.single('img'), async (req, res) => {
    try {
        if (req.file) {
            req.body.img = req.file.filename
        }

        let newProject = new projectModel(req.body)
        newProject.save()
        res.redirect('/')
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})





module.exports = projectRouter