const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.post('/favorites', (req, res) => {
    const { user_id, movie_id } = req.body;

    const sql = 'INSERT INTO favorites (user_id, movie_id) VALUES (?, ?)';

    db.query(sql, [user_id, movie_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Favori eklenirken hata oluştu.'
            });
        }

        res.json({
            message: 'Film favorilere eklendi!'
        });
    });
});
router.get('/favorites/:user_id', (req, res) => {
    const userId = req.params.user_id;

    const sql = `
        SELECT movies.*
        FROM favorites
        JOIN movies ON favorites.movie_id = movies.id
        WHERE favorites.user_id = ?
    `;

    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Favoriler alınırken hata oluştu.'
            });
        }

        res.json(results);
    });
});
router.delete('/favorites/:user_id/:movie_id', (req, res) => {
    const userId = req.params.user_id;
    const movieId = req.params.movie_id;

    const sql = `
        DELETE FROM favorites
        WHERE user_id = ? AND movie_id = ?
    `;

    db.query(sql, [userId, movieId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Favori silinirken hata oluştu.'
            });
        }

        res.json({
            message: 'Film favorilerden çıkarıldı!'
        });
    });
});
module.exports = router;