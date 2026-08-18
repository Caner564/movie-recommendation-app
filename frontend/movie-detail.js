const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

fetch(`http://localhost:3000/movies/${movieId}`)
    .then(response => response.json())
    .then(movie => {
        const movieDetail = document.getElementById('movie-detail');

        movieDetail.innerHTML = `
            <h2>${movie.title}</h2>
            <p><strong>Tür:</strong> ${movie.genre}</p>
            <p><strong>Yıl:</strong> ${movie.release_year}</p>
            <p><strong>Açıklama:</strong> ${movie.description}</p>
        `;
    })
    .catch(error => {
        console.error('Film detayları alınamadı:', error);
    });