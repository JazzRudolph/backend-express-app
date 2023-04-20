//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

//@desc Create all contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    console.log("The request body is :", req.body);
    res.status(200).json({ message: "Create a new contact" });
};

//@desc Get all contacts
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Dlelete contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact};
