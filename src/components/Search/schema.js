import { z } from 'zod';

export const searchSchema = z.object({
  search: z.string().min(1, 'Digite alguma palavra chave para pesquisar.'),
});
