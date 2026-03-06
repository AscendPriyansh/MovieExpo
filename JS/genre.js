const apiKey = "1fc26d262a39cc79e1050f35ed784eb6";

let actionGenre = document.querySelector(".action");
let comedyGenre = document.querySelector(".comedy");
let romanceGenre = document.querySelector(".romance");
let adventureGenre = document.querySelector(".adventure");
let animationGenre = document.querySelector(".animation");
let crimeGenre = document.querySelector(".crime");
let dramaGenre = document.querySelector(".drama");
let familyGenre = document.querySelector(".family");
let fantasyGenre = document.querySelector(".fantasy");
let historyGenre = document.querySelector(".history");
let documentaryGenre = document.querySelector(".documentary");
let sciencefictionGenre = document.querySelector(".sciencefiction");
let thrillerGenre = document.querySelector(".thriller");

async function getMoviesByGenres(genreId) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

    const response = await fetch(url);
    const data = await response.json();

    displayMovies(data.results);
}

function displayMovies(movies) {
    const container = document.querySelector(".cards");
    container.innerHTML = "";

    movies.forEach(movie => {
        const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        let card = document.createElement("div");
        card.classList.add("card");
        let img = document.createElement("img");
        img.setAttribute("src", `${poster}`);
        let h3 = document.createElement("h3");
        h3.textContent = `${movie.title}`;
        let p = document.createElement("p");
        p.textContent = `${movie.overview}`;
    
        card.append(img);
        card.append(h3);
        if(p.textContent.length >= 100) {
            p.textContent = p.textContent.slice(0, 80) + "...";
            card.append(p.textContent);
        }
        else {
            card.append(p.textContent);
        }
        container.append(card);
    });
}

actionGenre.addEventListener("click", ()=> {
    getMoviesByGenres(28);
});

comedyGenre.addEventListener("click", ()=> {
    getMoviesByGenres(35);
});

romanceGenre.addEventListener("click", ()=> {
    getMoviesByGenres(10749);
});

adventureGenre.addEventListener("click", ()=> {
    getMoviesByGenres(12);
});

animationGenre.addEventListener("click", ()=> {
    getMoviesByGenres(16);
});

crimeGenre.addEventListener("click", ()=> {
    getMoviesByGenres(80);
});

dramaGenre.addEventListener("click", ()=> {
    getMoviesByGenres(18);
});

familyGenre.addEventListener("click", ()=> {
    getMoviesByGenres(10751);
});

fantasyGenre.addEventListener("click", ()=> {
    getMoviesByGenres(14);
});

historyGenre.addEventListener("click", ()=> {
    getMoviesByGenres(36);
});

documentaryGenreGenre.addEventListener("click", ()=> {
    getMoviesByGenres(99);
});

sciencefictionGenreGenre.addEventListener("click", ()=> {
    getMoviesByGenres(878);
});

thrillerGenreGenre.addEventListener("click", ()=> {
    getMoviesByGenres(53);
});
