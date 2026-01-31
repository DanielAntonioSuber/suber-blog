import { createPost } from '../../actions'
import styles from '../../home.module.css'
import Link from 'next/link'

export default function CreatePostPage() {
    return (
        <div className={styles.container}>
            <div className="max-w-2xl mx-auto pt-20 px-4">
                <h1 className="text-3xl font-bold mb-8 text-sky-400">Crear Nuevo Post Mágico</h1>

                <form action={createPost} className="space-y-6 bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-2xl">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-slate-300 mb-2">Título</label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-sky-500 outline-none"
                            placeholder="Ej: Cómo usar Drizzle con Next.js"
                        />
                    </div>

                    <div>
                        <label htmlFor="intro" className="block text-sm font-medium text-slate-300 mb-2">Introducción Breve</label>
                        <input
                            type="text"
                            name="intro"
                            className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-sky-500 outline-none"
                            placeholder="Una frase cautivadora..."
                        />
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-slate-300 mb-2">URL de Imagen (Opcional)</label>
                        <input
                            type="text"
                            name="imageUrl"
                            className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-sky-500 outline-none"
                            placeholder="https://..."
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="content" className="block text-sm font-medium text-slate-300">Contenido (Markdown soportado)</label>
                            <span className="text-xs text-slate-500">Soporta imágenes, listas, y más</span>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-700/50 rounded p-3 mb-3 text-xs text-slate-400">
                            <p className="font-semibold mb-1 text-slate-300">Guía rápida:</p>
                            <ul className="grid grid-cols-2 gap-2">
                                <li><code># Título</code>, <code>## Subtítulo</code></li>
                                <li><code>**Negrita**</code>, <code>*Cursiva*</code></li>
                                <li><code>- Lista</code>, <code>1. Numerada</code></li>
                                <li><code>![Alt](url)</code> para imágenes</li>
                            </ul>
                        </div>
                        <textarea
                            name="content"
                            required
                            rows={10}
                            className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-sky-500 outline-none font-mono"
                            placeholder="# Hola Mundo..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded transition transform hover:scale-105"
                    >
                        Publicar Post 🚀
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link href="/blog" className="text-slate-500 hover:text-sky-400">← Volver al Blog</Link>
                </div>
            </div>
        </div>
    )
}
