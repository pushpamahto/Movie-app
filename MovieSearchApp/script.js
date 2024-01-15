function searchMovies() {
    const apiKey = '23c7f128'; // Replace with your actual OMDB API key
    const searchInput = document.getElementById('searchInput').value;
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.Search);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';

    if (movies) {
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

           

            const poster = document.createElement('img');
            poster.src = movie.Poster === 'N/A' ? 'https://via.placeholder.com/150' : movie.Poster;
            poster.alt = movie.Title;

            const title = document.createElement('h3');
            title.textContent = movie.Title;

            const year = document.createElement('p');
            year.textContent = `Year: ${movie.Year}`;

           
            movieCard.appendChild(poster);
            movieCard.appendChild(title);
            movieCard.appendChild(year);

            moviesContainer.appendChild(movieCard);
        });
    } else {
        moviesContainer.innerHTML = '<p>No results found</p>';
    }
}

document.getElementById('comedy').addEventListener('click', function() {
    searchMoviesByCategory('comedy');
});

document.getElementById('horror').addEventListener('click', function() {
    searchMoviesByCategory('horror');
});

document.getElementById('action').addEventListener('click', function() {
    searchMoviesByCategory('action');
});

function searchMoviesByCategory(category) {
    const apiKey = '23c7f128'; // Replace with your actual OMDB API key
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${category}&type=movie`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.Search);
        })
        .catch(error => console.error('Error fetching data:', error));
}
