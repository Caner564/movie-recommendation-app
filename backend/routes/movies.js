const express = require('express');
const router = express.Router();

const db = require('../db/database');

router.get('/', (req, res) => {
    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database hatası' });
        }

        res.json(results);
    });
});

module.exports = router;

router.get('/:id', (req, res) => {
    const movieId = req.params.id;

    const sql = 'SELECT * FROM movies WHERE id = ?';

    db.query(sql, [movieId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database hatası' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Film bulunamadı' });
        }

        res.json(results[0]);
    });
});