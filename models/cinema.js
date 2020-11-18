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
    return film.genre === genre
  })
  return list;
}


module.exports = Cinema;
