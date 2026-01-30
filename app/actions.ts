'use server'

import { db } from '@/db'
import { posts } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { desc, eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
    const title = formData.get('title') as string
    const intro = formData.get('intro') as string
    const content = formData.get('content') as string
    const imageUrl = formData.get('imageUrl') as string

    if (!title || !content) {
        throw new Error('Title and content are required')
    }

    await db.insert(posts).values({
        title,
        intro,
        content,
        imageUrl,
    })

    revalidatePath('/blog')
    redirect('/blog')
}

export async function getPosts() {
    return await db.select().from(posts).orderBy(desc(posts.createdAt))
}

export async function getPost(id: number) {
    const result = await db.select().from(posts).where(eq(posts.id, id))
    return result[0]
}
