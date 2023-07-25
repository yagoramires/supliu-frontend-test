import { z } from 'zod';

export const addAlbumSchema = z.object({
  name: z.string().min(1, 'Digite o nome do seu álbum.'),
  year: z.number().min(1, 'Digite o ano do seu álbum.'),
});
