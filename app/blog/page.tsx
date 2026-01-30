import { getPosts } from '../actions'
import Link from 'next/link'
import Image from 'next/image' // Although standard database posts might not have local images, we'll handle external URLs
import styles from '../home.module.css'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
    const posts = await getPosts()

    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <h1 className={styles.heroTitle}>Blog Mágico</h1>
                <p className={styles.heroSubtitle}>Explorando datos y desarrollo.</p>
                <div className="mt-8">
                    <Link href="/" className={styles.ctaButton}>← Volver al inicio</Link>
                </div>
            </header>

            <div className={styles.imageGrid} style={{ alignItems: 'stretch' }}>
                {posts.map((post) => (
                    <Link href={`/blog/${post.id}`} key={post.id} className="no-underline">
                        <article className={`${styles.magicCard} h-full flex flex-col`} style={{ width: '350px', cursor: 'pointer' }}>
                            {post.imageUrl && (
                                <div className="relative h-48 w-full mb-4">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="rounded object-cover w-full h-full"
                                    />
                                </div>
                            )}
                            <div className="p-4 flex-1 flex flex-col">
                                <h2 className="text-xl font-bold text-sky-400 mb-2">{post.title}</h2>
                                <p className="text-slate-400 text-sm flex-1">{post.intro}</p>
                                <div className="mt-4 text-xs text-slate-500">
                                    {post.createdAt?.toLocaleDateString()}
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}

                {posts.length === 0 && (
                    <div className="text-center text-slate-500 col-span-full">
                        <p>No hay posts todavía. ¡Sé el primero en crear uno!</p>
                        <Link href="/admin/create" className="text-sky-400 underline mt-2 block">Crear Post</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
