import { getPost } from '../../actions'
import styles from '../../home.module.css'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Correctly typing params for Next.js 16 dynamic routes
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const postId = parseInt(id)

    if (isNaN(postId)) {
        notFound()
    }

    const post = await getPost(postId)

    if (!post) {
        notFound()
    }

    return (
        <div className={styles.container}>
            <article className="max-w-3xl mx-auto pt-20 px-4 pb-20">
                <Link href="/blog" className="text-sky-400 hover:text-sky-300 mb-8 inline-block transition">← Volver al Blog</Link>

                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500 mb-6">
                        {post.title}
                    </h1>
                    <time className="text-slate-400 font-mono text-sm block mb-8">
                        {post.createdAt?.toLocaleDateString()}
                    </time>
                    {post.imageUrl && (
                        <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                            <img src={post.imageUrl} alt={post.title} className="w-full object-cover max-h-[500px]" />
                        </div>
                    )}
                </header>

                <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
                    {/* 
            For now, we render plain text with simple newlines. 
            In the future, we can change this to <MDXRemote /> 
          */}
                    {post.content.split('\n').map((line, i) => (
                        <p key={i} className="mb-4">{line}</p>
                    ))}
                </div>
            </article>
        </div>
    )
}
