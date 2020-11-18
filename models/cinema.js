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
  const film_length = this.films.every((film) => {
    return film.length > length;
  });
  return film_length;
}

module.exports = Cinema;
