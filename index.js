const express = require("express");
const usersRoutes = require('./backend/routes/users');
const favoritesRoutes = require('./backend/routes/favorites');
const db = require("./backend/db/database");
const moviesRouter = require("./backend/routes/movies");
const { spawn } = require('child_process');

const app = express();

app.use(express.json());

app.use("/movies", moviesRouter);
app.use(express.static('frontend'));
app.use('/', usersRoutes);
app.use('/', favoritesRoutes);
app.get('/recommend/:genre', (req, res) => {
    const genre = req.params.genre;

    const python = spawn('python', [
        'python/recommend.py',
        genre
    ]);

    let data = '';

    python.stdout.on('data', (chunk) => {
        data += chunk.toString();
    });

    python.stderr.on('data', (error) => {
        console.error(`Python hatası: ${error}`);
    });

    python.on('close', () => {
        try {
            const recommendations = JSON.parse(data);
            res.json(recommendations);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Öneriler alınamadı.'
            });
        }
    });
});
app.get("/", (req, res) => {
    res.send("API çalışıyor");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});