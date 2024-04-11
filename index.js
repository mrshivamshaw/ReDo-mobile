import express from 'express'
import { config as configDotenv } from 'dotenv';
import { dbconnect } from './config/database.js';
import authRoute from './routes/auth.js';
import profileRoute from './routes/profile.js';
configDotenv()

const app = express();
const port = process.env.PORT || 4000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dbconnect();

app.use('/auth',authRoute);
app.use('/user',profileRoute);
app.listen(port,()=>{
    console.log("Server started at port ",port);
})


app.get('/',(req,res)=>{    
    res.send('Server is running')
})