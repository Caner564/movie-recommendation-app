const express = require("express");
const usersRoutes = require('./backend/routes/users');
const favoritesRoutes = require('./backend/routes/favorites');
const db = require("./backend/db/database");
const moviesRouter = require("./backend/routes/movies");

const app = express();

app.use(express.json());

app.use("/movies", moviesRouter);
app.use(express.static('frontend'));
app.use('/', usersRoutes);
app.use('/', favoritesRoutes);
app.get("/", (req, res) => {
    res.send("API çalışıyor");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});