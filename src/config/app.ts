import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import dotenv from 'dotenv';
import { json, urlencoded } from 'body-parser';
import rateLimit from 'express-rate-limit';
import AuthRouter from '../routes/authRoutes';

dotenv.config();
const app: Application = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));

const allowedOrigin = process.env.ALLOWED_ORIGIN

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        message: 'Too many requests, please try again later.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || origin === allowedOrigin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
    })
);

// Routers calls of endpoints are here
app.use('/auth', AuthRouter);

export default app;