import ContactUs from "../db/models/contactUs.model.js";


const getContactUs = async (req, res) => {
  try {
    const contactUs = await ContactUs.find();
    res.send(contactUs);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addContactUs = async (req, res) => {
  try {
    const data = req.body;
    const contactUs = new ContactUs(data);
    await contactUs.save();

    res.status(201).send(contactUs);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getContactUsById = async (req, res) => {
  try {
    const id = req.params.contactId;
    const contactUs = await ContactUs.findById(id);

    res.send(contactUs);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateContactUs = async (req, res) => {
  try {
    const id = req.params.contactId;
    const updatecontactUs = await ContactUs.findByIdAndUpdate(id, req.body);
    updatecontactUs
      ? res.status(201).send(
        updatecontactUs
        )
      : res.status(404).send("contactUs not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteContactUs = async (req, res) => {
  try {
    const id = req.params.contactId;
  const deletecontactUs = await ContactUs.findByIdAndDelete(id);
  deletecontactUs
    ? res.send({
        message: "contactUs is deleted",
      })
    : res.status(404).send({
        message: "contactUs is not Found",
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getContactUs, addContactUs, getContactUsById, updateContactUs ,deleteContactUs};
