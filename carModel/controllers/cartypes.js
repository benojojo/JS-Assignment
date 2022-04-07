const pool = require("../models/index");
const cartypesController = {};

cartypesController.getAllPosts = function (req, res, next) {
  // get all posts from database
  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query("SELECT * FROM BlackforceprojectBenOkpere", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("cartypes", { cartypesPosts: results.rows });
  });
};

cartypesController.createAPost = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query(
    `INSERT INTO BlackforceprojectBenOkpere (MANUFACTURER, MODEL, COLOR, YEAR) VALUES ($1 , $2, $3, $4)`,
    [manufacturer, model, color, year],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
      return res.render("cartypes", { cartypesPosts: [] });
    }
  );
};

cartypesController.deleteAPost = function (req, res, next) {
  // get resource id

  const id = req.params.id;

  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query(
    "DELETE FROM BlackforceprojectBenOkpere WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/cartypes");
    }
  );
};

cartypesController.editAPost = function (req, res, next) {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM BlackforceprojectBenOkpere WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("cartypesEdit", { cartypesPost: results.rows[0] });
    }
  );
};

cartypesController.updateAPost = function (req, res, next) {
  const id = req.params.id;

  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  pool.query(
    "UPDATE BlackforceprojectBenOkpere SET author = $1, title = $2, body = $3 WHERE id = $4",
    [author, title, body, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/cartypes");
    }
  );
};

module.exports = cartypesController;
