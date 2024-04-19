import express from 'express'
import { config as configDotenv } from 'dotenv';
import dbconnect from './config/database.js';
import authRoute from './routes/auth.js';
import profileRoute from './routes/profile.js';
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { cloudinaryset } from './config/cloudinary.js';
configDotenv()
cloudinaryset()

const app = express();
const port = process.env.PORT || 4000

app.use(cors(
    {
        origin:["http://localhost:5173"],
        methods:["POST","GET","PUT","DELETE"],
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))
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