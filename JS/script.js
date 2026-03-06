const apiKey = "1fc26d262a39cc79e1050f35ed784eb6";

let currentImg=0;

async function getTrendingMovies() {

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  displayHeroMovie(data.results); 
}


function displayHeroMovie(movies) {

    let hero = document.querySelector(".hero");
    let heroContent = document.createElement("div");
    let h1 = document.querySelector("h1");
    let p = document.createElement("p");
    let date = document.createElement("p");
    let vote = document.createElement("p");
    h1.classList.add("hero-font");
    p.classList.add("hero-lang");
    date.classList.add("hero-lang");
    vote.classList.add("hero-lang");
    heroContent.classList.add("hero-content");
    hero.append(h1);
    heroContent.append(p);
    heroContent.append(date);
    heroContent.append(vote);
    hero.append(heroContent);

    setInterval(()=> {
        let movie = movies[currentImg];
        const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
        const title = `https://image.tmdb.org/t/p/original${movie.title}`;
        const originalLang = `https://image.tmdb.org/t/p/original${movie.original_language}`;
        const releaseDate = `https://image.tmdb.org/t/p/original${movie.release_date}`;
        const voteAverage = `https://image.tmdb.org/t/p/original${movie.vote_average}`;
        hero.style.backgroundImage = `url(${backdrop})`;
        h1.textContent = `${movie.title}`;
        p.textContent = `${movie.original_language}`;
        date.textContent = `${movie.release_date}`;
        vote.textContent = `${movie.vote_average}`;

        currentImg++;

        if(currentImg>=movies.length) {
            currentImg=0;
        }
    }, 1000*5)
}

getTrendingMovies();