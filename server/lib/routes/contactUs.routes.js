import { Router } from "express";
import { addContactUs, deleteContactUs, getContactUs, getContactUsById, updateContactUs } from "../controllers/contactUs.controller.js";

const contactUsRouter= Router()

contactUsRouter.route("/").get(getContactUs).post(addContactUs)
contactUsRouter.route("/:contactId").get(getContactUsById).put(updateContactUs).delete(deleteContactUs)



export default contactUsRouter