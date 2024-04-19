import { uploadImageToCloudinary } from "../utils/imageUploader.js";
import profile from "../models/profile.js";

export const profileUpdate = async(req,res) => {
    try {
        const user = req.body;
        if(!user.id || !user) {
            return res.status(400).json({
                success : false,
                message: 'Invalid user'
            })
        }
        const newUser = await profile.findOneAndUpdate({_id : user.id},{...user},{new : true})
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

export const uploadEmoji = async(req,res) => {
    try {
        const {id} = req.body
        const {pic} = req.files
        console.log(pic);
        if(!id || !pic) {
            return res.status(400).json({
                success : false,
                message: 'Invalid user'
            })
        }
        const secureUrl = await uploadImageToCloudinary(pic,process.env.FOLDER_NAME)
        console.log(secureUrl);
        const newUser = await profile.findByIdAndUpdate(id,{emojiUrl : secureUrl.secure_url},{new : true})
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

export const uploadProfilePic = async(req,res) => {
    try {
        const {id} = req.body
        const {pic} = req.files
        console.log(id);
        if(!id || !pic) {
            return res.status(400).json({
                success : false,
                message: 'Invalid user'
            })
        }
        const secureUrl = await uploadImageToCloudinary(pic,process.env.FOLDER_NAME)
        console.log(secureUrl);
        const newUser = await profile.findByIdAndUpdate(id,{emojiUrl : secureUrl.secure_url},{new : true})
        return res.status(200).json({
            success : true,
            message: 'Profile created successfully',
            user : newUser
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message: 'Internal server error'
        })
    }
}
