const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/auth.middleware");

const {
  getUsers,
  getUser,
  getProfile,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.use(authMiddleware);

router.get(
  "/me",
  getProfile
);

router.get(
  "/",
  getUsers
);

router.get(
  "/:id",
  getUser
);

router.put(
  "/:id",
  updateUser
);

router.delete(
  "/:id",
  deleteUser
);

module.exports = router;