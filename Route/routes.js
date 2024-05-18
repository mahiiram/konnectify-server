import { Router } from "express";


const router = Router()
import * as usercontroller from '../Controller/user-controller.js';
import { Auth } from "../Middleware/Auth.js";


//userrouter
router.route('/user/register').post(usercontroller.userRegister)
router.route('/user/login').post(usercontroller.userLogin)
router.route('/getuser').get(Auth,usercontroller.getuser)

export default router;