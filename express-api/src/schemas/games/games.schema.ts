import { z } from 'zod'

const createGameSchema = z.object({
    nome: z.string(),
    descricao: z.string(),
    produtora: z.string(),
    ano: z.number().min(4).max(4),
    idadeMinima: z.number(),
})

export { createGameSchema }
