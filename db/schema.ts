import { pgTable, text, serial, timestamp, integer } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content').notNull(), // MDX content
    intro: text('intro'),
    imageUrl: text('image_url'),
    views: integer('views').default(0),
    createdAt: timestamp('created_at').defaultNow(),
});
