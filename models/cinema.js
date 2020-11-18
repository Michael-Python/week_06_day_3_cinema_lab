const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilms = function (films) {
  this.films = films;
  return this.films;
}
Cinema.prototype.findFilmByName = function(title) {
  return this.films.find((film) => {
    // this looks in the film file and returns the title object
    return film.title === title;
  });
}

Cinema.prototype.findByGenre = function (genre) {
  const list = this.films.filter((film) => {
    return film.genre === genre;
  });
  return list;
}

Cinema.prototype.findByYear = function (year) {
  const year_list = this.films.some((film) => {
    return film.year === year;
  });
  return year_list;
}

Cinema.prototype.filmsOverLength = function (length) {
  const filmLength = this.films.every((film) => {
    return film.length > length;
  });
  return film_length;
}

Cinema.prototype.totalRunningTime = function () {
  total = this.films.reduce((total, this.film.length) => {
    total += this.film.length;
  })
  return total;
}
// const sumElements = function(numbers) {
//   sum = numbers.reduce((sum, number) => {
//       return sum += number;
//   })
//   return sum; 
}

// write the result from the terminal!
// SyntaxError: Invalid destructuring assignment target
// sounds fancy!!
module.exports = Cinema;
