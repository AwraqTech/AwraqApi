import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY;
const TOKEN_EXPIRY = '1h';

export const generateToken = (userId: string, roles: string[]) => {
    const payload = { userId, roles };
    if (!SECRET_KEY) {
        throw new Error('JWT_SECRET_KEY is not defined in the environment variables');
    }

    return jwt.sign(payload, SECRET_KEY, { expiresIn: TOKEN_EXPIRY });
};