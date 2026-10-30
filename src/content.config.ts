import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Tim Terapis Sriwijaya Massage'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string(), // Rasio 4:3 (800x600 WebP)
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).default([]),
  }),
});

export const collections = { blog };
