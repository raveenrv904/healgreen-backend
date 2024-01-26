const express = require("express");

const router = express.Router();

const { createUser, getAllUsers } = require("../controllers/UserController");

router.route("/").get(getAllUsers).post(createUser);

module.exports = router;
