const database = require("./database");

const getMovies = (req, res) => {
  database
    .query("SELECT * FROM movies")
    .then(([movies]) => {
      res.json(movies);
    })
    .catch((error) => {
      res.status(500).send(`Error ${error}`);
    });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("SELECT * FROM movies WHERE id=?", [id])
    .then(([result]) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(`error: ${error}`);
    });
};
const postMovie = (req, res) => {
  const { title, director, year, color, duration } = req.body;
  database
    .query(
      "INSERT INTO movies (title, director, year, color, duration) VALUES (?, ?, ? ,?, ?)",
      [title, director, year, color, duration]
    )
    .then(([result]) => {
      res.location(`/api/movies/${result}`.sendStatus(201));
    })
    .catch((error) => {
      res.status(404).send(`error: ${error} not found`);
    });
};

const getUsers = (req, res) => {
  database
    .query("SELECT * FROM users")
    .then(([users]) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).send(`error ${error}`);
    });
};
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("SELECT * FROM users WHERE id=?", [id])
    .then(([result]) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(404).send(`error: ${error} not found`);
    });
};
const postUser = (req, res) => {
  const { firstname, lastname, email, city, language } = req.body;
  database
    .query(
      "INSERT INTO users (firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, email, city, language]
    )
    .then(([result]) => {
      res.location(`/api/users/${result}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("erreur");
    });
};

module.exports = {
  getMovies,
  getMovieById,
  getUsers,
  getUserById,
  postMovie,
  postUser,
};
