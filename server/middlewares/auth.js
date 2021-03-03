const { User, Post } = require("../models");
const { decodeToken } = require("../helpers/jwt");

function authenticate(req, res, next) {
  const { access_token } = req.headers;
  if (!access_token) return next({ name: "NoToken" });
  try {
    const decoded = decodeToken(access_token);
    User.findByPk(decoded.id)
      .then((user) => {
        if (!user) return next({ name: "InvalidToken" });
        else {
          req.user = user;
          next();
        }
      })
      .catch((err) => next(err));
  } catch (error) {
    return next({ name: "InvalidToken" });
  }
}

function authorize(req, res, next) {
  const id = req.params.id;

  Post.findByPk(id)
    .then((post) => {
      if (!post) return next({ name: "NotFound" });
      if (post.UserId !== req.user.id) {
        if (req.user.role !== "Editor") {
          return next({ name: "Unauthorized" });
        }
      }
      return next();
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = { authenticate, authorize };
