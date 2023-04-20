const express = require("express");
const router = express.Router();

const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require("../controllers/contactControllers");


router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;

/*I THINK I CAN DELETE THIS CODE JUST HOLDING ONTO IT TO MAKE SURE!!
const { getContacts } = require("../controllers/contactControllers");
const { createContact } = require("../controllers/contactControllers");
const { getContact } = require("../controllers/contactControllers");
const { updateContact } = require("../controllers/contactControllers");
const { deleteContact } = require("../controllers/contactControllers");
*/