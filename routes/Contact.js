import { Router } from "express";
import { ContactController, ContactGet, SearchContacts } from "../controllers/ContactController.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";

const ContactRouter = Router();

ContactRouter.post('/contact',ContactController)
console.log('Product route file loaded');



ContactRouter.get('/getcontacts',ContactGet)
console.log('Product route file loaded');


ContactRouter.get('/searchcontacts',SearchContacts)

export default ContactRouter