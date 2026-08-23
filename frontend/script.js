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
const categorySelect = document.getElementById('categorySelect');
const noResults = document.getElementById('no-results');

function applyFilters() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;
    const movieCards = document.querySelectorAll('.movie-card');

    let found = false;

    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const genre = card.querySelector('p').textContent;

        const matchesSearch = title.includes(searchText);
        const matchesCategory =
            selectedCategory === 'all' || genre === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    noResults.style.display = found ? 'none' : 'block';
}

searchButton.addEventListener('click', applyFilters);
categorySelect.addEventListener('change', applyFilters);