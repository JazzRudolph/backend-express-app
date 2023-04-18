
const express = require("express");
const router = express.Router();
const {getContact} = require("../controllers/contactController");
const { createContact } = require("../controllers/contactControlllers");
const { getContact } = require("../controllers/contactControlllers");
const { updateContact } = require("../controllers/contactControlllers");
const { deleteContact } = require("../controllers/contactControlllers");



router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get();

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;

