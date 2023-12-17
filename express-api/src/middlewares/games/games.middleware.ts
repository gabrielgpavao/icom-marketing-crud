import { NextFunction, Request, Response } from 'express'
import { gamesService } from '../../services/games/games.service'
import { gameIdParamSchema } from '../../schemas/games/games.schema'

class GamesMiddleware {
    async ensureIdExists(req: Request, res: Response, next: NextFunction) {
        const gameId = gameIdParamSchema.parse(req.params.id)

        if (gameId) {
            await gamesService.retrieve(gameId)
        }

        next()
    }
}

export const gamesMiddleware = new GamesMiddleware()
