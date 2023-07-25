import { z } from 'zod';

export const addTrackSchema = z.object({
  title: z.string().min(1, 'Digite o nome da sua faixa.'),
  number: z.number().min(1, 'Digite o número da sua faixa.'),
  duration: z.number().min(1, 'Digite a duração da sua faixa.'),
});
