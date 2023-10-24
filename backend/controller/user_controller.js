import Bookings from "../model/Bookings"
import User from "../model/User"
import bcrypt from "bcryptjs"

export const getAllUsers = async (req, res, next) => {
  let users
  try {
    users = await User.find()
  } catch (e) {
    return console.log(e)
  }
  if (!users) {
    return res.status(500).json({
      message: "Unexpected Error"
    })
  }
  return res.status(200).json({ users: users })
}

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = new User({ name, email, password: hashedPassword });
    user = await user.save();
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(201).json({ _id: user._id });
};

export const updateUser = async (req, res, next) => {
  const id = req.params.id
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  const hashedPassword = bcrypt.hashSync(password);

  let user
  try {
    user = await User.findByIdAndUpdate(id, { name, email, password: hashedPassword })
  } catch (err) {
    return console.log(err)
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(200).json({ message: "Updated Successfully" })
}

export const deleteUser = async (req, res, next) => {
  const id = req.params.id
  let user
  try {
    user = await User.findByIdAndDelete(id)
  } catch (err) {
    return console.log(err)
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(200).json({ message: "Deleted Successfully" })
}

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }
  let user
  try {
    user = await User.findOne({ email: email })
  } catch (err) {
    return console.log(err)
  }

  if (!user) {
    return res.status(400).json({ message: "No match found" })
  }

  const isPassword = bcrypt.compareSync(password, user.password)
  if (!isPassword) {
    return res.status(400).json({ message: "Incorrect Password" })
  }
  return res.status(200).json({ message: "Login Successful" ,_id:user._id})
}

export const getAllBookings = async (req, res, next) => {
  const id = req.params.id
  let bookings
  try {
    bookings = await Bookings.find({ user: id }).populate("movie");
  } catch (err) {
    return console.log(err)
  }
  if(!bookings){
    return res.status(400).json({message:"Booking not found"})
  }
  return res.status(200).json({bookings})
}


export const getUserById = async (req,res,next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(200).json({ user });
};
