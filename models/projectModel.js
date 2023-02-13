const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "pas de nom"],
    },
    url: {
        type: String,
        required: [true, "url est requis"]
    },
    githubUrl: {
        type: String,
        required: [true, "url github est requis"]
    },
    img: {
        type: String,
        required: [false, "image est requis" ]
    }
})

const projectModel = mongoose.model("projects", projectSchema); // c'est ici qu'on va créer notre fichier qui contiendra les users (utilisateurs)
module.exports = projectModel