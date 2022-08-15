const express = require('express')
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const imdbController = require('./controllers/imdbController')
const app = express();

/* Here you put all the middlewares. for example:*/
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("You have arrived at Matan-Ben Nagar imdb API")
})
app.get('/getFEATURED/', imdbController.getFeatured);
app.get('/getSearch', imdbController.getSearch)

/* Start the server */
app.listen(PORT, () => console.log("Server started on port " + PORT));
