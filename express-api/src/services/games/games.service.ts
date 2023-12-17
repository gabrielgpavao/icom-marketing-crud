import { AxiosError } from 'axios'
import { api } from '../../config/axios'
import { Game } from '../../entities/games/games.entity'
import { tCreateGameInput } from '../../types/games.types'
import { AppError } from '../../constants/AppError'
import { HttpStatus } from '../../constants/HttpStatus'

class GamesServices {
    async findAll(): Promise<Game[]> {
        const { data } = await api.get<Game[]>('/jogo')
        return data
    }

    async create(createGameData: tCreateGameInput): Promise<Game> {
        const { data } = await api.post<number>('/jogo', createGameData)
        return {
            id: data,
            ...createGameData,
        }
    }

    async retrieve(id: number): Promise<Game> {
        try {
            const { data } = await api.get<Game>('/jogo/' + id)
            return data
        } catch (error) {
            if (
                error instanceof AxiosError &&
                error.response?.data === 'Jogo não encontrado!'
            ) {
                throw new AppError(
                    'NotFound',
                    'Game not found. Try another ID.',
                    HttpStatus.NOT_FOUND,
                )
            }

            throw error
        }
    }

    async update(id: number, data: tCreateGameInput): Promise<Game> {}

    async delete(id: number): Promise<void> {
        await api.delete('/jogo/' + id)
    }
}

const gamesService = new GamesServices()

export { gamesService }
