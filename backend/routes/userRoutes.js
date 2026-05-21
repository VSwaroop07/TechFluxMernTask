const express = require("express");

const {
  registerUser,
  searchUsers,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.get("/search", searchUsers);
router.delete("/:id", deleteUser);

module.exports = router;