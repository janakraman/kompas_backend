const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password, role } = req.body;
      const newUser = await User.create({
        username,
        email,
        password,
        role,
      });
      res.status(201).json({
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({
        where: {
          username,
        },
      });
      if (!user) {
        next({ name: "InvalidAuth" });
      } else {
        if (checkPassword(password, user.password)) {
          const payload = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
          };
          const access_token = createToken(payload);
          res.status(200).json(access_token);
        } else {
          next({ name: "InvalidAuth" });
        }
      }
    } catch (error) {}
  }
}

module.exports = UserController;
