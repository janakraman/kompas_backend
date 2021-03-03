module.exports = function (err, req, res, next) {
  switch (err.name) {
    case "SequelizeValidationError":
      const validation = err.errors.map((e) => e.message);
      res.status(400).json({ message: validation });
      break;

    case "SequelizeUniqueConstraintError":
      const unique = err.errors.map((e) => e.message);
      res.status(400).json({ message: unique });
      break;

    case "InvalidAuth":
      res.status(400).json({ message: 'Invalid email / password' });
      break;

    case "NoToken":
      res.status(401).json({ message: 'Token required' });
      break;

    case "InvalidToken":
      res.status(401).json({ message: 'Invalid token' });
      break;

    case "NotFound":
      res.status(404).json({ message: 'Not found' });
      break;

    case "Unauthorized":
      res.status(401).json({ message: 'Unauthorized' });
      break;

    default:
      res.status(500).json(err);
      break;
  }
};
