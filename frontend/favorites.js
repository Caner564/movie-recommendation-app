function loadFavorites() {
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
                    <br>
                    <button onclick="removeFavorite(${movie.id})">
                        Favorilerden Çıkar
                    </button>
                `;

                favoriteList.appendChild(movieCard);
            });
        })
        .catch(error => {
            console.error('Favoriler alınamadı:', error);
        });
}

function removeFavorite(movieId) {
    fetch(`http://localhost:3000/favorites/1/${movieId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            loadFavorites();
        })
        .catch(error => {
            console.error('Favori silinirken hata oluştu:', error);
        });
}

loadFavorites();

const darkModeButton = document.getElementById('darkModeButton');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeButton.textContent = '☀️ Light Mode';
}

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeButton.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeButton.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});