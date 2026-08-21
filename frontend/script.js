fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movies => {
        const movieList = document.getElementById('movie-list');

        movieList.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
    <h3>${movie.title}</h3>
    <p>${movie.genre}</p>
    <p>${movie.release_year}</p>
    <a href="movie-detail.html?id=${movie.id}">Detayları Gör</a>
`;

            movieList.appendChild(movieCard);
        });
    })
    .catch(error => {
        console.error('Film verileri alınamadı:', error);
    });

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const noResults = document.getElementById('no-results');

searchButton.addEventListener('click', () => {
    const searchText = searchInput.value.toLowerCase();
const movieCards = document.querySelectorAll('.movie-card');

if (searchText.trim() === '') {
    movieCards.forEach(card => {
        card.style.display = 'block';
    });

    noResults.style.display = 'none';
    return;
}

    let found = false;

    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();

        if (title.includes(searchText)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (found) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
});