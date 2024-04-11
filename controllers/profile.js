export const profile = (req,res) => {
    try {
        const user = req.body;
        if(!user) {
            return res.status(400).json({
                success : false,
                message: 'Invalid user'
            })
        }
        const newUser = profile.findOneAndUpdate({_id : user._id},{...user},{new : true})
        return res.status(200).json({
            success : true,
            message: 'Profile created successfully',
            user : newUser
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message: 'Internal server error'
        })
    }
}