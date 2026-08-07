// src/content.config.js
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // El cargador estándar para archivos locales

// 1. Colección para tu Blog (Andragogía, software, etc.)
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  
  // Enviamos ({ image }) como función flecha para habilitar las fotos en JS
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: image().optional(), // Optimización nativa activa
    tags: z.array(z.string()).default([]),
    images: z.array(z.string()).optional(), 
    category: z.enum(['software', 'andragogia', 'general', 'docencia']).default('general'),
  }),
});

// 2. Colección para tus Proyectos de software
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});
export const collections = { blog, projects };