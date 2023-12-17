import { Request, Response } from 'express'
import { Game } from '../../entities/games/games.entity'
import { HttpStatus } from '../../constants/HttpStatus'
import { gamesService } from '../../services/games/games.service'

class GamesController {
    async findAll(req: Request, res: Response<Game[]>): Promise<Response> {
        const games = await gamesService.findAll()

        return res.status(HttpStatus.OK).json(games)
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
