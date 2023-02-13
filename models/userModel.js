const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: [true, "le mail est requis"]
    },
    password: {
        type: String,
        required: [true, "le password est requis"]
    }
})

const userModel = mongoose.model("users", userSchema); // c'est ici qu'on va créer notre fichier qui contiendra les users (utilisateurs)
module.exports = userModel