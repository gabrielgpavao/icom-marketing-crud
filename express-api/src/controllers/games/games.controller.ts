import { Request, Response } from 'express'
import { Game } from '../../entities/games/games.entity'
import { HttpStatus } from '../../constants/HttpStatus'
import { gamesService } from '../../services/games/games.service'
import {
    createGameSchema,
    gameIdParamSchema,
} from '../../schemas/games/games.schema'

class GamesController {
    async findAll(_: Request, res: Response<Game[]>): Promise<Response> {
        const games = await gamesService.findAll()

        return res.status(HttpStatus.OK).json(games)
    }

    async create(req: Request, res: Response<Game>): Promise<Response> {
        const createGameData = createGameSchema.parse(req.body)

        const game = await gamesService.create(createGameData)

        return res.status(HttpStatus.CREATED).json(game)
    }

    async retrieve(req: Request, res: Response<Game>): Promise<Response> {
        const gameId = gameIdParamSchema.parse(req.params.id)

        const game = await gamesService.retrieve(gameId)

        return res.status(HttpStatus.OK).json(game)
    }

    async update(req: Request, res: Response<Game>): Promise<Response> {
        const gameId = gameIdParamSchema.parse(req.params.id)

        const updateGameData = createGameSchema.parse(req.body)

        const game = await gamesService.update(gameId, updateGameData)

        return res.status(HttpStatus.OK).json(game)
    }

    async delete(req: Request, res: Response<void>): Promise<Response> {
        const gameId = gameIdParamSchema.parse(req.params.id)

        await gamesService.delete(gameId)

        return res.status(HttpStatus.NO_CONTENT).json()
    }
}

const gamesController = new GamesController()

export { gamesController }
