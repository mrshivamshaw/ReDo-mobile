import profile from "../models/profile";

export const login = (req,res) => {
    try {
        const {email,password,id} = req.body;
        if(!email || !password || !id) {
            return res.status(400).json({
                success : false,
                message: 'Invalid credentials'
            })
        }
        const user = profile.findById(id);
        if(!user) {
            return res.status(400).json({
                success : false,
                message: 'Invalid credentials'
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

export const signin = (req,res) => {
    try {
        const {firstName,lastName,dob,email,password,confirmPassword,userName} = req.body;
        if(firstName || !lastName || !dob || !email || !password || !confirmPassword || !userName) {
            return res.status(400).json({
                success : false,
                message: 'Invalid credentials'
            })
        }
        const user = profile.create({firstName,lastName,dob,email,password,userName});
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