import { config } from "dotenv"
import { startServer } from "./app/app"
import { Roles } from "./app/feature-modules/role/role.type";
import authService from "./app/feature-modules/auth/auth.service";
config()
startServer();
const populateDb = async ()=>{
    const admin = {
        //_id :"",
        name:"Admin",
        email:"admin@gmail.com",
        password:"admin",
        role:Roles.admin,
        //restaurant_name:" "
    }
    
    await authService.register(admin)
}

populateDb();