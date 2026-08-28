const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.post('/ratings', (req, res) => {
    const { user_id, movie_id, rating } = req.body;

    const sql = `
        INSERT INTO ratings (user_id, movie_id, rating)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE rating = ?
    `;

    db.query(sql, [user_id, movie_id, rating, rating], (err, result) => {
        if (err) {
    console.error('Rating error:', err);
    return res.status(500).json({
        message: err.message
    });
}

        res.json({
            message: 'Puan başarıyla kaydedildi!'
        });
    });
});
router.get('/ratings/:movie_id', (req, res) => {
    const movieId = req.params.movie_id;

    const sql = `
        SELECT AVG(rating) AS average_rating, COUNT(*) AS rating_count
        FROM ratings
        WHERE movie_id = ?
    `;

    db.query(sql, [movieId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Puan bilgisi alınamadı.'
            });
        }

        res.json(results[0]);
    });
});
module.exports = router;