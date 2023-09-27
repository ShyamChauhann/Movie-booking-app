import Admin from "../model/Admin"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const addAdmin = async (req, res, next) => {
    const { email, password } = req.body

    if (
        !email &&
        email.trim() === "" &&
        !password &&
        password.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    let exe_admin
    try {
        exe_admin = await Admin.findOne({ email: email })
    } catch (err) {
        return console.log(err)
    }

    if (exe_admin) {
        return res.status(200).json({ message: "Admin already Exists" })
    }

    let admin
    const hashedPassword = bcrypt.hashSync(password)
    try {
        admin = new Admin({ email, password: hashedPassword })
        admin = await admin.save()
    } catch (err) {
        return console.log(err)
    }
    if (!admin) {
        return res.status(500).json({ message: "Error" })
    }
    return res.status(200).json({ admin: admin })
}

export const adminLogin = async (req, res, next) => {
    const { email, password } = req.body

    if (
        !email &&
        email.trim() === "" &&
        !password &&
        password.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    let exe_admin
    try {
        exe_admin = await Admin.findOne({ email })
    } catch (err) {
        return console.log(err)
    }
    if (!exe_admin) {
        return res.status(400).json({ message: "Admin Error" })
    }
    const isPassword = bcrypt.compareSync(password, exe_admin.password)

    if (!isPassword) {
        return res.status(400).json({ message: "Admin Password Error" })
    }
    const token = jwt.sign({ id:exe_admin._id },process.env.SECRET_KEY,{
        expiresIn: "7d",
    })

    return res.status(200).json({ message: "Successful authentication",token,id:exe_admin._id})
}   

export const getAdmin = async(req,res,next) => {
    let admin
    try{
        admin = await Admin.find()
    }catch(err){
        return console.log(err)
    }
    if(!admin){
        return res.status(400).json({message:"Admin not Found"})
    }
    return res.status(200).json({admin})
}

export const getAdminById = async (req, res, next) => {
    const id = req.params.id;

    let admin;
    try {
        admin = await Admin.findById(id).populate("addedMovies");
    } catch (err) {
        return console.log(err);
    }
    if (!admin) {
        return console.log("Cannot find Admin");
    }
    return res.status(200).json({ admin });
};

