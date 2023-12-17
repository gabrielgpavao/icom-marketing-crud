import { z } from 'zod'

const createGameSchema = z.object({
    nome: z.string(),
    descricao: z.string(),
    produtora: z.string(),
    ano: z.number(),
    idadeMinima: z.number(),
})

const gameIdParamSchema = z
    .string()
    .regex(/^[0-9]+$/, 'Game ID must be an integer')
    .transform((value) => parseInt(value, 10))

export { createGameSchema, gameIdParamSchema }
