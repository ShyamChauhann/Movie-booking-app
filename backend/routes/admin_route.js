import express from "express"
import { addAdmin, adminLogin, getAdmin } from "../controller/admin_controller"

const adminroute = express.Router()

adminroute.post("/signup", addAdmin)
adminroute.post("/login", adminLogin)
adminroute.get("/", getAdmin)


export default adminroute