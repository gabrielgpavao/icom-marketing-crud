import { api } from '../../config/axios'
import { AppError } from '../../constants/AppError'
import { HttpStatus } from '../../constants/HttpStatus'
import { Game } from '../../entities/games/games.entity'
import { tCreateGameInput } from '../../types/games.types'

class GamesServices {
    async findAll(): Promise<Game[]> {
        const { data } = await api.get<Game[]>('/jogo')
        return data
    }

    async create(data: tCreateGameInput): Promise<Game> {}
    async retrieve(id: number): Promise<Game> {}
    async update(id: number, data: tCreateGameInput): Promise<Game> {}
    async delete(id: number): Promise<Game> {}
}

const gamesService = new GamesServices()

export { GamesServices, gamesService }
