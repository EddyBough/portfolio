const express = require ('express'); 
const mongoose = require('mongoose');
require('dotenv').config() // cache les données afin que le mdp et le lien github ne soit pas lu (comme des exceptions lorsqu'on exportera notre dossier)
const projectRouter = require('./routes/projectRouter'); //création du fichier routeur pour ajouter les projets
const userRouter = require('./routes/userRouter'); 
const db = process.env.BDD_URL // on a crypté l'url de mongoDB dans le fichier .env afin qu'elle ne soit pas lisible lors de l'export du projet

const app = express() // on démarre l'appli

app.use(express.static("./assets")) // démarre tout ce qui est image etc...
app.use(express.urlencoded({extended: true})) // on encode notre form et on va le décoder pour qu'il soit utilisable sur notre route
app.use(express.json()) // on met du json au cas où on a besoin du json
app.use(projectRouter)
app.use(userRouter)

app.listen(3000, (err)=>{ // ecoute le port 3000
    if (err) {
        console.log(err); // affiche l'erreur s'il y a erreur
    } else {
        console.log("vous êtes connecté"); // sinon ca marche 
    }
})
mongoose.set('strictQuery', true); 
mongoose.connect(db,(err)=>{ // connexion à la bdd 
    if (err) {
        console.log(err); 
    } else {
        console.log("base de donnée opérationnelle");
    }
})
