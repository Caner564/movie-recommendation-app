const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Kayıt sırasında hata oluştu.'
            });
        }

        res.json({
            message: 'Kayıt başarılı!'
        });
    });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';

    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Giriş sırasında hata oluştu.'
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                message: 'E-posta veya şifre hatalı.'
            });
        }

        res.json({
            message: 'Giriş başarılı!'
        });
    });
});

module.exports = router;