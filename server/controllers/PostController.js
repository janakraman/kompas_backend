const { Post, User } = require("../models");

class PostController {
  static async create(req, res, next) {
    const { title, summary, image_url, content } = req.body;
    try {
      const newPost = await Post.create({
        title,
        summary,
        image_url,
        content,
        UserId: req.user.id,
      });
      res.status(201).json({
        title: newPost.title,
        summary: newPost.summary,
        image_url: newPost.image_urle,
        content: newPost.content,
        UserId: newPost.UserId,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const posts = await Post.findAll({
        include: [
          {
            model: User,
            attributes: {
              exclude: ["password"],
            },
          },
        ],
      });
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const post = await Post.findOne({
        where: {
          id,
        },
        include: [
          {
            model: User,
            attributes: {
              exclude: ["password"],
            },
          },
        ],
      });
      if (!post) {
        next({ name: "NotFound" });
      }
      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    const { id } = req.params;
    const { title, summary, image_url, content } = req.body;
    try {
      const edited = await Post.update(
        {
          title,
          summary,
          image_url,
          content,
        },
        {
          where: { id },
          returning: true,
        }
      );

      res.status(200).json(edited);
    } catch (error) {
      next(error);
    }
  }

  static async destroy(req, res, next) {
    const { id } = req.params;
    try {
      const deleted = await Post.destroy({
        where: { id },
      });
      if (!deleted) {
        next({ name: "NotFound" });
      }
      res.status(200).json({ message: "Post successfully deleted" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = PostController;
