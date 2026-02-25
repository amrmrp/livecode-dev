import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    category: z.string(),            // 👈 فیلد دسته‌بندی اضافه کن
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
