import { Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import authService from "./auth.service";

const router = Router();

router.post('/Register',async (req,res,next)=>{
    try{
        const user = req.body;
        const result = await authService.register(user);
        const data=await result.save();
        res.send(new ResponseHandler(result));
    }
    catch(error){
        next(error)
    }
})

router.post('/Login',async (req,res,next)=>{
    try{
        const cred = req.body;
        const result = await authService.login(cred);
        res.send(new ResponseHandler(result));
    }
    catch(e){
        next(e)
    }
})

export default router