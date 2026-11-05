import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const publications = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!_template.md"], base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),
    year: z.number().int(),
    venue: z.string().optional(),
    status: z.enum(["published", "preprint", "in-preparation", "thesis"]).default("published"),
    preprintUrl: z.string().url().optional(),
    articleUrl: z.string().url().optional(),
    doi: z.string().optional(),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(0)
  })
});

const talks = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!_template.md"], base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    websiteUrl: z.string().url().optional(),
    slidesUrl: z.string().url().optional(),
    recordingUrl: z.string().url().optional(),
    sortOrder: z.number().default(0)
  })
});

const awards = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!_template.md"], base: "./src/content/awards" }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    sortOrder: z.number().default(0)
  })
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    status: z.string().default("Ongoing"),
    sortOrder: z.number().default(0)
  })
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(true)
  })
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(true),
    topic: z.string().optional()
  })
});

export const collections = { publications, talks, awards, research, blog: posts, notes };
