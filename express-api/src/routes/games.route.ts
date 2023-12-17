import { Router } from 'express'
import { gamesController } from '../controllers/games/games.controller'
import { gamesMiddleware } from '../middlewares/games/games.middleware'

export const gamesRoute = Router()

gamesRoute.get('/', gamesController.findAll)
gamesRoute.post('/', gamesController.create)
gamesRoute.get('/:id', gamesController.retrieve)
gamesRoute.put('/:id', gamesController.update)
gamesRoute.delete(
    '/:id',
    gamesMiddleware.ensureIdExists,
    gamesController.delete,
)
