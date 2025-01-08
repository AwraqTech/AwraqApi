import { Router } from "express";
import registerUser from "../controllers/auth/main-user/registerUser";
import loginUser from "../controllers/auth/main-user/loginUser";
import sendingNewOtp from "../controllers/auth/main-user/sendingNewOtp";
import resendOtherOtp from "../controllers/auth/main-user/resendOtherOtp";
import requestResetPassword from "../controllers/auth/main-user/requestResetPassword";
import resetPassword from "../controllers/auth/main-user/resetPassword";
import posLoginUser from "../controllers/auth/pos-user/loginUser";
import validatingPosMachine from "../controllers/auth/pos-user/validatingPosMachine";

const router = Router();

// Main user authentication
router.get('/register', registerUser);
router.get('/login', loginUser);
router.get('/otp', sendingNewOtp);
router.get('/resend-otp', resendOtherOtp);
router.get('/request-reset-password', requestResetPassword);
router.get('/reset-password', resetPassword);

// POS user authentication
router.get('/pos-login', posLoginUser);
router.get('/validating-pos-machine', validatingPosMachine);

export default router;