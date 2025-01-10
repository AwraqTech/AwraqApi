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

const allowedOriginApp = process.env.ALLOWED_ORIGIN_APP
const allowedOriginPos = process.env.ALLOWED_ORIGIN_POS

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
            if (!origin || origin === allowedOriginApp || origin === allowedOriginPos) {
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