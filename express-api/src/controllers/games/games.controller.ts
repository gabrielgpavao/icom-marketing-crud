import { Request, Response } from 'express'
import { Game } from '../../entities/games/games.entity'
import { HttpStatus } from '../../constants/HttpStatus'

class GamesController {
    async findAll(req: Request, res: Response<Game>): Promise<Response> {
        return res.status(HttpStatus.OK).json()
    }

    async create(req: Request, res: Response): Promise<Response> {
        return res.status(HttpStatus.CREATED).json()
    }

    async retrieve(req: Request, res: Response): Promise<Response> {
        return res.status(HttpStatus.OK).json()
    }

    async update(req: Request, res: Response): Promise<Response> {
        return res.status(HttpStatus.OK).json()
    }

    async delete(req: Request, res: Response): Promise<Response> {
        return res.status(HttpStatus.NO_CONTENT).json()
    }
}

const gamesController = new GamesController()

export { GamesController, gamesController }
