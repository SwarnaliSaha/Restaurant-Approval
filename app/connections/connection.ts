import { connect } from "mongoose";

export const connectMongo = async ()=>{
    try{
        const {MONGO_CONNECTION} = process.env;
        await connect(MONGO_CONNECTION || "");
        console.log("connected")
        return true;
    }
    catch(e){
        console.log("cound not connect to mogo db");
        throw {message:"connection err",error:e}
    }
}