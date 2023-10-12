import express from "express"
import { addAdmin, adminLogin, getAdmin ,getAdminById} from "../controller/admin_controller"

const adminroute = express.Router()

adminroute.post("/signup", addAdmin)
adminroute.post("/login", adminLogin)
adminroute.get("/", getAdmin)
adminroute.get("/:id", getAdminById);


export default adminroute