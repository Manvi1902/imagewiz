import { Document, Schema, model, models } from "mongoose";

export interface User extends Document{
    clerkId:Number;
    firstName: string;
    lastName: string;
    planId:number;
    email: string;
    photo: string;
    creditBalanced:number,
    
} 

const UserSchema = new Schema({
    clerkId: { 
        type: Number, 
        required: true ,
        unique: true
    },
    photo: {
        type: String,
        required: true,
    },
    firstName: { 
        type: String, 
        required: true,
        unique: true
    },
    lastName: { 
        type: String, 
        required: true,
        unique: true
    },
    planId: {
        type: Number,
        default: 1,
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
    },
    creditBalanced:{ 
        type: Number, 
        default:10
    },
   
});

const User = models?.User || model('User',UserSchema );

export default User;