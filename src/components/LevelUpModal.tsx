import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/levelUpModal.module.css'

export function levelUpModal() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button">
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>

    )
}