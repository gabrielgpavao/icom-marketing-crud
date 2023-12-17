import { z } from 'zod'
import { createGameSchema } from '../schemas/games/games.schema'

type tCreateGameInput = z.infer<typeof createGameSchema>

export { tCreateGameInput }
