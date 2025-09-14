import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes/index";
import { httpStatusCode, responseMessage } from "./libs/enum";
import { makeResponse } from "./libs/helper";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Routes
app.use(routes);

// 404 handler
app.use('*', (req: Request, res: Response) => {
    res.status(httpStatusCode.notFound).json(
        makeResponse(false, responseMessage.notFound, null)
    );
});

// Global error handler
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Global error handler:', error);
    
    res.status(httpStatusCode.internalServerError).json(
        makeResponse(false, responseMessage.internalServerError, null)
    );
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    console.log(`[server]: Environment: ${process.env.NODE_ENV || 'development'}`);
});