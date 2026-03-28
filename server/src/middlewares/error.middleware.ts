import type { ErrorRequestHandler } from 'express';
import { HttpStatus } from '../constants/httpStatus.js';
import { ApiError } from '../utils/apiError.js';

export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({ message: err.message });
    } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    }
}