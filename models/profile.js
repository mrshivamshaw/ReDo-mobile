import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    interests: {
        type: [String],
        default: []
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other'
    },
    profileUrl: {
        type: String
    },
    emojiUrl: {
        type: String
    },
    address: {
        type: String
    },
    aboutMe: {
        type: String
    }
});

export default mongoose.model("User", userSchema);
