import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from "./routes/auth.route.js"
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log(err)
})

app.listen(3000, () => {
    console.log('server running on port 3000!');
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});