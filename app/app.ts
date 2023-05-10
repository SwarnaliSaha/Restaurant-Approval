import express from 'express'
import { connectMongo } from './connections/connection';
import { registerRoutes } from './routes/routes';

export const startServer = async ()=>{
    try{
        const app = express();

        await connectMongo();

         registerRoutes(app)

        const {PORT} = process.env;
        app.listen(PORT||3000,()=>console.log(`listening at port ${PORT||3000}`))
    }
    catch(e){
        console.log("could not start server");
        process.exit(1)
    }
}