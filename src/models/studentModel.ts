import mongoose, { Schema,Document } from "mongoose";

// Interface representing a Student
interface Student extends Document {
    name: string;
    age: number;
    email: string;
}

const studentSchema = new Schema<Student>({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }

})
export default mongoose.model <Student> ('Student',studentSchema);