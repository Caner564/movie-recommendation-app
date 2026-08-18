const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'asdqwrdcxz142',
    database: 'movie_recommendation'
});

connection.connect((err) => {
    if (err) {
        console.error('Database bağlantısı başarısız:', err);
        return;
    }

    console.log('Database bağlantısı başarılı!');
});

module.exports = connection;