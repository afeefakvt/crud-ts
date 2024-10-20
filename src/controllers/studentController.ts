import { triggerAsyncId } from 'async_hooks';
import Student from '../models/studentModel';
import { Request, Response } from 'express';


export const loadStudent  = async(req:Request,res:Response):Promise<void> =>{
    try {
        const student = await Student.find()
        res.render('students',{student})
    } catch (error) {
        res.status(500).json({success:false,message:"error fetching students"})
        
    }
}
//create a new student
export const addStudent = async (req:Request,res:Response):Promise<void> =>{
    try {
        const {name,email,age} = req.body;
        const student = new Student({
            name:name,
            email:email,
            age:age
        })
         const students = await student.save()
        if(students){
            res.status(200).json({success:true,message:"added data successfully"})
        }else{
            res.status(400).json({success:false,message:"couldn't add data"})
        }
        
    } catch (error) {
        res.status(500).json({success:false,message:"error adding student"})

        
    }
}
export const deleteStudent = async(req:Request,res:Response):Promise<void>=>{
    try {
    const id = req.params.id;
    const deletedStudent = await Student.findByIdAndDelete(id);

    if(deletedStudent){
        res.status(200).json({success:true,message:"deleted successfully"})
    }else{
        res.status(404).json({success:false,message:"student not found"})
    }
    } catch (error) {
        res.status(500).json({success:false,message:"error deleting student"});
        
    }

}

export const updateStudent = async(req:Request,res:Response):Promise<void>=>{
    try {
        const id = req.params.id;
        const{name,email,age} = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(id,{name,email,age},{new:true});

        if(updatedStudent){
            res.status(200).json({success:true,message:"updated successfully"})
        }else{
            res.status(400).json({success:false,message:"couldn/'t update student"})
        }

    } catch (error) {
        res.status(500).json({succes:false,message:"error updating student"})
        
    }
}