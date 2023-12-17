/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { AppError } from '../../constants/AppError'
import { HttpStatus } from '../../constants/HttpStatus'
import { AxiosError } from 'axios'

export function handleErrorsMiddleware(
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction,
): Response {
    if (error instanceof AppError) {
        return response
            .status(error.statusCode)
            .json({ name: error.name, message: error.message })
    }

    if (error instanceof ZodError) {
        if (Object.values(error.flatten().fieldErrors).length) {
            return response
                .status(HttpStatus.BAD_REQUEST)
                .json({ message: error.flatten().fieldErrors })
        }

        return response
            .status(HttpStatus.BAD_REQUEST)
            .json({ message: error.flatten().formErrors })
    }

    if (error instanceof AxiosError) {
        const { code, name, message } = error

        console.error({ code, name, message })

        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            name: 'AxiosError',
            message: 'Internal server error',
        })
    }

    console.error(error)
    return response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' })
}
