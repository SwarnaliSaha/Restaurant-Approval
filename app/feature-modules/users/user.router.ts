import { Router,Request,Response,NextFunction } from "express";
import userService from "./user.service";
import { authorize, validateRole } from "../../utility/middlewares/middlewares";
import { excludedPaths } from "../../routes/route.data";
import { ResponseHandler } from "../../utility/response-handler";
import restaurantService from "../restaurant/restaurant.service";

const router = Router();

//ONLY REGISTERED AND LOGGED IN OWNER CAN REGISTER THEIR RESTAURANTS6412a0aa03db3e9d36740aab
router.post('/RegisterRestaurant',authorize(excludedPaths),validateRole(["6413eb1caf843ed5f14fcd43"]),async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const restaurantData = req.body;

        const result = await userService.RegisterRestaurant(restaurantData);
        const data = await result.save();
        res.send(new ResponseHandler(result))
    }
    catch(e){
        next(e)
    }
})

//ADMIN GETS THE LIST OF ALL THE RESTAURANT IRRESPECTIVE OF THEIR APPROVAL STATUS
router.get('/GetCompleteList',authorize(excludedPaths),validateRole(["64129e3203db3e9d36740aa5"]),async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const result = await userService.findRestOfAllStatus();
        res.send(new ResponseHandler(result))
    }
    catch(e){
        next(e)
    }
})

//ADMIN CAN APPROVE ANY REGISTERED RESTAURANT WITH THE RESTAURANT ID
router.post('/ApproveRestaurant',authorize(excludedPaths),validateRole(["64129e3203db3e9d36740aa5"]),async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const restId = req.body;
        const result = await userService.ApproveRestaurant(restId);
        const data = await result?.save();
        res.send(new ResponseHandler(result))
    }
    catch(e){
        next(e)
    }
})

//Third party user who wants to check the list of all approved restaurants
router.get('/',async (req,res,next)=>{
    try{
        const result = await userService.findAllRestaurants()
        res.send(new ResponseHandler(result))
    }
    catch(e){
        next(e)
    }
})
export default router