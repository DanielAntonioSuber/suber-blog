'use client'

import { useActionState } from 'react'
import { submitContactForm } from '../actions'
import styles from '../home.module.css'

const initialState = {
    success: false,
    message: '',
}

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

    return (
        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
            <h2 className={styles.sectionTitle}>Contáctame</h2>
            <p className={styles.paragraph} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                ¿Tienes algún proyecto en mente? ¡Escríbeme!
            </p>

            <form action={formAction} className={styles.contactForm}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={styles.input}
                        placeholder="Tu nombre"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={styles.input}
                        placeholder="tucorreo@ejemplo.com"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        className={styles.textarea}
                        placeholder="Cuéntame sobre tu proyecto..."
                    />
                </div>

                <button
                    type="submit"
                    className={styles.ctaButton}
                    disabled={isPending}
                    style={{ width: '100%', textAlign: 'center', opacity: isPending ? 0.7 : 1 }}
                >
                    {isPending ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {state.message && (
                    <div className={styles.successMessage} style={{
                        borderColor: state.success ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        color: state.success ? '#4ade80' : '#f87171',
                        backgroundColor: state.success ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'
                    }}>
                        {state.message}
                    </div>
                )}
            </form>
        </section>
    )
}
