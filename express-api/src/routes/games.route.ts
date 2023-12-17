import { Router } from 'express'
import { gamesController } from '../controllers/games/games.controller'

export const gamesRoute = Router()

gamesRoute.get('/', gamesController.findAll)
gamesRoute.post('/', gamesController.create)
gamesRoute.get('/', gamesController.retrieve)
gamesRoute.put('/', gamesController.update)
gamesRoute.delete('/', gamesController.delete)
