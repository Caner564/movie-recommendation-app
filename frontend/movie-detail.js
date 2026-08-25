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

    const favoriteButton = document.getElementById('favoriteButton');

favoriteButton.addEventListener('click', () => {
    const movieId = new URLSearchParams(window.location.search).get('id');

    fetch('http://localhost:3000/favorites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: 1,
            movie_id: movieId
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Favori eklenirken hata oluştu:', error);
    });
});