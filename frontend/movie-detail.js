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
const ratingSelect = document.getElementById('ratingSelect');
const ratingButton = document.getElementById('ratingButton');
const ratingMessage = document.getElementById('ratingMessage');

ratingButton.addEventListener('click', () => {
    
    const rating = ratingSelect.value;

    fetch('http://localhost:3000/ratings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: 1,
            movie_id: movieId,
            rating: rating
        })
    })
    .then(response => response.json())
    .then(data => {
        ratingMessage.textContent = data.message;
    })
    .catch(error => {
        console.error('Puan verme sırasında hata oluştu:', error);
        ratingMessage.textContent = 'Puan verme sırasında hata oluştu.';
    });
});
const averageRating = document.getElementById('averageRating');

fetch(`http://localhost:3000/ratings/${movieId}`)
    .then(response => response.json())
    .then(data => {
        if (data.rating_count > 0) {
            averageRating.textContent =
                `Ortalama Puan: ${Number(data.average_rating).toFixed(1)} / 5 (${data.rating_count} puan)`;
        } else {
            averageRating.textContent = 'Henüz puan verilmemiş.';
        }
    })
    .catch(error => {
        console.error('Puan bilgisi alınamadı:', error);
        averageRating.textContent = 'Puan bilgisi alınamadı.';
    });
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