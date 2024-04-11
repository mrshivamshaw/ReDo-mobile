import express from 'express'
const app = express();
import { config as configDotenv } from 'dotenv';
configDotenv()

const port = process.env.PORT || 4000
app.use(express.json())

//import routes from routes folder

//mount the api route
// app.use('/api/v1',router);
// import { dbconnect } from './config/database.js';
// dbconnect();

app.listen(4000,()=>{
    console.log("hogya chalu");
})


app.get('/',(req,res)=>{    
    res.send('Helloooo jiiiii')
})