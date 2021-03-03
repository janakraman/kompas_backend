const router = require("express").Router();
const UserController = require("../controllers/UserController");
const PostController = require("../controllers/PostController");
const { authenticate, authorize } = require("../middlewares/auth");

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Hello World"
  })
})
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.use(authenticate);
router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts/:id", authorize, PostController.edit);
router.delete("/posts/:id", authorize, PostController.destroy);

module.exports = router;
