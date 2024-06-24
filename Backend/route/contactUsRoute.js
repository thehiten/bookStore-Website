import express from "express";
import { contactus } from "../controller/contactUsController.js"; // Ensure the file extension is included if using ES modules

const router = express.Router();

router.post("/", contactus);

export default router;
