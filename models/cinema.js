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



module.exports = Cinema;
