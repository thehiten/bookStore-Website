import User from "../model/user.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const data = req.body;
    const user = await User.findOne({ email: data.email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(data.password, 10); // Corrected here
    const newUser = new User(data);
    newUser.password = hashPassword; // Corrected here
    await newUser.save();

    res.status(201).json({ message: "User created successfully" ,newUser});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const data = req.body;
    const user = await User.findOne({ email: data.email });
    
    if (!user) {
      res.status(400).json({ message: "invalid username" });
    }
    const isMatch = await bcrypt.compare(data.password, user.password);
    
    if (!isMatch) {
      res.status(400).json({ message: "invalid password" });
    }
    res.status(200).json({ message: "Successfully logged in", user });
   
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "internal server error" });
  }
};
