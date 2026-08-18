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
`;

            movieList.appendChild(movieCard);
        });
    })
    .catch(error => {
        console.error('Film verileri alınamadı:', error);
    });