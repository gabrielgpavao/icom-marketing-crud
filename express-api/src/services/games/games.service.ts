import { Game } from '../../entities/games/games.entity'
import { tCreateGameInput } from '../../types/games.types'

class GamesServices {
    async findAll(): Promise<Game> {}
    async create(data: tCreateGameInput): Promise<Game> {}
    async retrieve(id: number): Promise<Game> {}
    async update(id: number, data: tCreateGameInput): Promise<Game> {}
    async delete(id: number): Promise<Game> {}
}

const gamesService = new GamesServices()

export { GamesServices, gamesService }
