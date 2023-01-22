const moviess = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    },
    {
      title: '12 Angry Men',
      year: 1957,
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      score: 8.9
    },
    {
      title: 'Schindler"s List',
      year: 1993,
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: ['Biography', 'Drama', 'History'],
      score: 8.9
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      director: 'Quentin Tarantino',
      duration: '2h 34min',
      genre: ['Crime', 'Drama'],
      score: 8.9
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      director: 'Peter Jackson',
      duration: '3h 21min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.9
    },
    {
      title: 'Il buono, il brutto, il cattivo',
      year: 1966,
      director: 'Sergio Leone',
      duration: '3h 2min',
      genre: ['Western'],
      score: 8.9
    },
    {
      title: 'Fight Club',
      year: 1999,
      director: 'David Fincher',
      duration: '2h 19min',
      genre: ['Drama'],
      score: 8.8
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
      director: 'Peter Jackson',
      duration: '2h 58min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.8
    },
    {
      title: 'Forrest Gump',
      year: 1994,
      director: 'Robert Zemeckis',
      duration: '2h 22min',
      genre: ['Comedy', 'Drama', 'Romance'],
      score: 8.8
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
      director: 'Irvin Kershner',
      duration: '2h 4min',
      genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      score: 8.8
    },
    {
      title: 'Inception',
      year: 2010,
      director: 'Christopher Nolan',
      duration: '2h 28min',
      genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
      score: 8.8
    },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
      director: 'Peter Jackson',
      duration: '2h 59min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.7
    },
    {
      title: 'One Flew Over the Cuckoo"s Nest',
      year: 1975,
      director: 'Milos Forman',
      duration: '2h 13min',
      genre: ['Drama'],
      score: 8.7
    },
    {
      title: 'Goodfellas',
      year: 1990,
      director: 'Martin Scorsese',
      duration: '2h 26min',
      genre: ['Crime', 'Drama'],
      score: 8.7
    },
    {
      title: 'The Matrix',
      year: 1999,
      director: 'Lana Wachowski',
      duration: '2h 16min',
      genre: ['Action', 'Sci-Fi'],
      score: 8.7
    },
    {
      title: 'Shichinin no samurai',
      year: 1954,
      director: 'Akira Kurosawa',
      duration: '3h 27min',
      genre: ['Adventure', 'Drama'],
      score: 8.7
    },
    {
      title: 'Star Wars',
      year: 1977,
      director: 'George Lucas',
      duration: '2h 1min',
      genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      score: 8.7
    },
    {
      title: 'Cidade de Deus',
      year: 2002,
      director: 'Fernando Meirelles',
      duration: '2h 10min',
      genre: ['Crime', 'Drama'],
      score: 8.7
    },
    {
      title: 'Se7en',
      year: 1995,
      director: 'David Fincher',
      duration: '2h 7min',
      genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
      score: 8.6
    },
    {
      title: 'The Silence of the Lambs',
      year: 1991,
      director: 'Jonathan Demme',
      duration: '1h 58min',
      genre: ['Crime', 'Drama', 'Thriller'],
      score: 8.6
    },
    {
      title: 'It"s a Wonderful Life',
      year: 1946,
      director: 'Frank Capra',
      duration: '2h 10min',
      genre: ['Drama', 'Family', 'Fantasy'],
      score: 8.6
    },
    {
      title: 'La vita è bella',
      year: 1997,
      director: 'Roberto Benigni',
      duration: '1h 56min',
      genre: ['Comedy', 'Drama', 'War'],
      score: 8.6
    },
    {
      title: 'The Usual Suspects',
      year: 1995,
      director: 'Bryan Singer',
      duration: '1h 46min',
      genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
      score: 8.6
    },
    {
      title: 'Léon',
      year: 1988,
      director: 'Luc Besson',
      duration: '1h 50min',
      genre: ['Crime', 'Drama', 'Thriller'],
      score: 8.6
    },
    {
      title: 'Saving Private Ryan',
      year: 1998,
      director: 'Steven Spielberg',
      duration: '2h 49min',
      genre: ['Drama', 'War'],
      score: 8.6
    },
    {
      title: 'Sen to Chihiro no kamikakushi',
      year: 2001,
      director: 'Hayao Miyazaki',
      duration: '2h 5min',
      genre: ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
      score: 8.6
    },
    {
      title: 'American History X',
      year: 1998,
      director: 'Tony Kaye',
      duration: '1h 59min',
      genre: ['Crime', 'Drama'],
      score: 8.5
    },
    {
      title: 'C"era una volta il West',
      year: 1968,
      director: 'Sergio Leone',
      duration: '2h 44min',
      genre: ['Western'],
      score: 8.6
    },
    {
      title: 'Interstellar',
      year: 2014,
      director: 'Christopher Nolan',
      duration: '2h 49min',
      genre: ['Adventure', 'Drama', 'Sci-Fi'],
      score: 8.6
    },
    {
      title: 'Psycho',
      year: 1960,
      director: 'Alfred Hitchcock',
      duration: '1h 49min',
      genre: ['Horror', 'Mystery', 'Thriller'],
      score: 8.5
    },
    {
      title: 'The Green Mile',
      year: 1999,
      director: 'Frank Darabont',
      duration: '3h 9min',
      genre: ['Crime', 'Drama', 'Fantasy', 'Mystery'],
      score: 8.5
    },
    {
      title: 'Casablanca',
      year: 1942,
      director: 'Michael Curtiz',
      duration: '1h 42min',
      genre: ['Drama', 'Romance', 'War'],
      score: 8.5
    },
    {
      title: 'City Lights',
      year: 1931,
      director: 'Charles Chaplin',
      duration: '1h 27min',
      genre: ['Comedy', 'Drama', 'Romance'],
      score: 8.6
    },
    {
      title: 'Intouchables',
      year: 2011,
      director: 'Olivier Nakache',
      duration: '1h 52min',
      genre: ['Biography', 'Comedy', 'Drama'],
      score: 8.6
    },
    {
      title: 'Modern Times',
      year: 1936,
      director: 'Charles Chaplin',
      duration: '1h 27min',
      genre: ['Comedy', 'Drama', 'Family', 'Romance'],
      score: 8.5
    },
    {
      title: 'Raiders of the Lost Ark',
      year: 1981,
      director: 'Steven Spielberg',
      duration: '1h 55min',
      genre: ['Action', 'Adventure'],
      score: 8.5
    },
    {
      title: 'The Pianist',
      year: 2002,
      director: 'Roman Polanski',
      duration: '2h 30min',
      genre: ['Biography', 'Drama', 'Music', 'War'],
      score: 8.5
    },
    {
      title: 'The Departed',
      year: 2006,
      director: 'Martin Scorsese',
      duration: '2h 31min',
      genre: ['Crime', 'Drama', 'Thriller'],
      score: 8.5
    },
    {
      title: 'Rear Window',
      year: 1954,
      director: 'Alfred Hitchcock',
      duration: '1h 52min',
      genre: ['Mystery', 'Thriller'],
      score: 8.5
    },
    {
      title: 'Terminator 2: Judgment Day',
      year: 1991,
      director: 'James Cameron',
      duration: '2h 17min',
      genre: ['Action', 'Sci-Fi', 'Thriller'],
      score: 8.5
    },
    {
      title: 'Back to the Future',
      year: 1985,
      director: 'Robert Zemeckis',
      duration: '1h 56min',
      genre: ['Adventure', 'Comedy', 'Sci-Fi'],
      score: 8.5
    },
    {
      title: 'Whiplash',
      year: 2014,
      director: 'Damien Chazelle',
      duration: '1h 47min',
      genre: ['Drama', 'Music'],
      score: 8.5
    },
    {
      title: 'Gladiator',
      year: 2000,
      director: 'Ridley Scott',
      duration: '2h 35min',
      genre: ['Action', 'Adventure', 'Drama'],
      score: 8.5
    },
    {
      title: 'The Prestige',
      year: 1994,
      director: 'Christopher Nolan',
      duration: '2h 10min',
      genre: ['Drama', 'Mystery', 'Sci-Fi', 'Thriller'],
      score: 8.5
    },
    {
      title: 'The Lion King',
      year: 1994,
      director: 'Roger Allers',
      duration: '1h 28min',
      genre: ['Animation', 'Adventure', 'Drama', 'Family', 'Musical'],
      score: 8.5
    },
    {
      title: 'Memento',
      year: 2000,
      director: 'Christopher Nolan',
      duration: '1h 53min',
      genre: ['Mystery', 'Thriller'],
      score: 8.5
    },
    {
      title: 'Apocalypse Now',
      year: 1979,
      director: 'Francis Ford Coppola',
      duration: '2h 27min',
      genre: ['Drama', 'War'],
      score: 8.5
    },
    {
      title: 'Alien',
      year: 1979,
      director: 'Ridley Scott',
      duration: '1h 57min',
      genre: ['Horror', 'Sci-Fi'],
      score: 8.5
    },
    {
      title: 'The Great Dictator',
      year: 1940,
      director: 'Charles Chaplin',
      duration: '2h 5min',
      genre: ['Comedy', 'Drama', 'War'],
      score: 8.5
    },
    {
      title: 'Sunset Blvd.',
      year: 1950,
      director: 'Billy Wilder',
      duration: '1h 50min',
      genre: ['Drama', 'Film-Noir'],
      score: 8.5
    },
    {
      title:
        'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
      director: 'Stanley Kubrick',
      duration: '1h 35min',
      genre: ['Comedy'],
      score: 8.5
    },
    {
      title: 'Nuovo Cinema Paradiso',
      year: 1988,
      director: 'Giuseppe Tornatore',
      duration: '2h 35min',
      genre: ['Drama'],
      score: 8.5
    },
    {
      title: 'Das Leben der Anderen',
      year: 2006,
      director: 'Florian Henckel von Donnersmarck',
      duration: '2h 17min',
      genre: ['Drama', 'Thriller'],
      score: 8.5
    },
    {
      title: 'Hotaru no haka',
      year: 1988,
      director: 'Isao Takahata',
      duration: '1h 29min',
      genre: ['Animation', 'Drama', 'War'],
      score: 8.5
    },
    {
      title: 'Blade Runner 2049',
      year: 2017,
      director: 'Denis Villeneuve',
      duration: '2h 44min',
      genre: ['Mystery', 'Sci-Fi', 'Thriller'],
      score: 8.5
    },
    {
      title: 'Paths of Glory',
      year: 1957,
      director: 'Stanley Kubrick',
      duration: '1h 28min',
      genre: ['Drama', 'War'],
      score: 8.4
    },
    {
      title: 'Django Unchained',
      year: 2012,
      director: 'Quentin Tarantino',
      duration: '2h 45min',
      genre: ['Drama', 'Western'],
      score: 8.4
    },
    {
      title: 'The Shining',
      year: 1980,
      director: 'Stanley Kubrick',
      duration: '2h 26min',
      genre: ['Drama', 'Horror'],
      score: 8.4
    },
    {
      title: 'WALL·E',
      year: 2008,
      director: 'Andrew Stanton',
      duration: '1h 38min',
      genre: ['Animation', 'Adventure', 'Family', 'Sci-Fi'],
      score: 8.4
    },
    {
      title: 'American Beauty',
      year: 1999,
      director: 'Sam Mendes',
      duration: '2h 2min',
      genre: ['Drama', 'Romance'],
      score: 8.4
    },
    {
      title: 'The Dark Knight Rises',
      year: 2012,
      director: 'Christopher Nolan',
      duration: '2h 44min',
      genre: ['Action', 'Thriller'],
      score: 8.4
    },
    {
      title: 'Mononoke-hime',
      year: 1997,
      director: 'Hayao Miyazaki',
      duration: '2h 14min',
      genre: ['Animation', 'Adventure', 'Fantasy'],
      score: 8.4
    },
    {
      title: 'Oldeuboi',
      year: 2003,
      director: 'Chan-wook Park',
      duration: '2h',
      genre: ['Action', 'Drama', 'Mystery', 'Thriller'],
      score: 8.4
    },
    {
      title: 'Aliens',
      year: 1986,
      director: 'James Cameron',
      duration: '2h 17min',
      genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
      score: 8.4
    },
    {
      title: 'Witness for the Prosecution',
      year: 1957,
      director: 'Billy Wilder',
      duration: '1h 56min',
      genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
      score: 8.4
    },
    {
      title: 'Once Upon a Time in America',
      year: 1984,
      director: 'Sergio Leone',
      duration: '3h 49min',
      genre: ['Crime', 'Drama'],
      score: 8.4
    },
    {
      title: 'Das Boot',
      year: 1981,
      director: 'Wolfgang Petersen',
      duration: '2h 29min',
      genre: ['Adventure', 'Drama', 'Thriller', 'War'],
      score: 8.4
    },
    {
      title: 'Citizen Kane',
      year: 1941,
      director: 'Orson Welles',
      duration: '1h 59min',
      genre: ['Drama', 'Mystery'],
      score: 8.4
    },
    {
      title: 'Dangal',
      year: 2016,
      director: 'Nitesh Tiwari',
      duration: '2h 41min',
      genre: ['Action', 'Biography', 'Drama', 'Sport'],
      score: 8.6
    }];

// Iteration 1: All directors? - Get the array of all directors.


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((movie) => (movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')));
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0)
        return 0;           
    const sumScores = moviesArray.reduce((acc, movie) => {
        if (typeof movie.score !== 'number')
            return acc;
        acc += movie.score;
            return acc;
    }, 0);
     return Number((sumScores / moviesArray.length).toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    let skippedMovies = 0;
    const sumDramaScores = moviesArray.reduce((acc, movie) => {
        if (movie.genre.includes('Drama') && typeof movie.score === 'number') {
            return acc += movie.score;
        } else {
            skippedMovies++;
            return acc;
        }
    },0);
    if (sumDramaScores === 0)
        return 0;
    return Number((sumDramaScores / (moviesArray.length - skippedMovies)).toFixed(2));
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let sortedArray = moviesArray.sort((a, b) => a.year - b.year);
    sortedArray = sortedArray.sort((a, b) => {
        if (a.year === b.year && a.title < b.title) {
            return -1;
    }});
    return sortedArray.slice(0);
}

// I'm don't understand why Jasmine considers that the movies aren't sorted by name if their year are the same...

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesABC = moviesArray.slice(0,20);
    moviesABC = moviesABC.map((movie) => movie.title);
    return moviesABC.sort();
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}