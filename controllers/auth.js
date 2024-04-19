import profile from "../models/profile.js";

export const login = async(req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password ) {
            return res.status(400).json({
                success : false,
                message: 'Invalid credentials'
            })
        }
        const user = await profile.findOne({email});
        if(!user) {
            return res.status(400).json({
                success : false,
                message: 'User not found'
            })
        }
        if(user.email !== email || user.password !== password) {
            return res.status(400).json({
                success : false,
                message: 'Invalid credentials'
            })
        }
        return res.status(200).json({
            success : true,
            message: 'Login successful',
            user : user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message: 'Internal server error'
        })
    }
}

export const signin = async(req,res) => {
    try {
        const {firstName,lastName,dob,email,password,confirmPassword,userName} = req.body;
        if(!firstName || !lastName || !dob || !email || !password || !confirmPassword || !userName) {
            return res.status(400).json({
                success : false,
                message: 'Invalid credentials'
            })
        }
        const checkUserByEmail = await profile.findOne({email});
        if(checkUserByEmail) {
            console.log(checkUserByEmail);
            return res.status(400).json({
                success : false,
                message: 'User already exists'
            })
        }
        const checkUserByUserName = await profile.findOne({userName});
        if(checkUserByUserName){
            return res.status(400).json({
                success : false,
                message: 'User already exists'
            })
        }
        if(password !== confirmPassword) {
            return res.status(400).json({
                success : false,
                message: 'Passwords do not match'
            })
        }
        const user = await profile.create({firstName,lastName,dob,email,password,userName});
        return res.status(200).json({
            success : true,
            message: 'Signin successful',
            user : user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message: 'Internal server error'
        })
    }
}