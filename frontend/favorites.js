fetch('http://localhost:3000/favorites/1')
    .then(response => response.json())
    .then(movies => {
        const favoriteList = document.getElementById('favorite-list');

        favoriteList.innerHTML = '';

        if (movies.length === 0) {
            favoriteList.innerHTML = '<p>Henüz favori film yok.</p>';
            return;
        }

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <h3>${movie.title}</h3>
                <p>${movie.genre}</p>
                <p>${movie.release_year}</p>
                <a href="movie-detail.html?id=${movie.id}">Detayları Gör</a>
            `;

            favoriteList.appendChild(movieCard);
        });
    })
    .catch(error => {
        console.error('Favoriler alınamadı:', error);
    });