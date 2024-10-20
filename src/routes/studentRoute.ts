import { Router } from 'express';
import { updateStudent,addStudent, deleteStudent, loadStudent } from "../controllers/studentController";


const router = Router();

router.get("/",loadStudent);
router.post("/addStudent",addStudent);
router.delete("/deleteStudent/:id",deleteStudent);
router.put("/updateStudent/:id",updateStudent);

export default router;