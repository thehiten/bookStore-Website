import ContactUs from "../model/contactUs.js";

export const contactus = async (req, res) => {

    try {
        const data = req.body;
        const contact = new ContactUs(data);
        await contact.save();
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
}