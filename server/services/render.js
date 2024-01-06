const axios = require("axios");

exports.home_route = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.status(200).send({ message: `Error. ${err}` });
    });
};
exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
  res.render("update_user");
};
