import React from "react"
import styles from "./CardSection.module.css"

interface CardSectionProps {
    title: string
    children: React.ReactNode
}

function CardSection({ title, children }: CardSectionProps) {
    

    return (
        <section className={styles.section}>
            <h2 className={styles.h2}>{title}</h2>
            {children}
        </section>
    )
}

export default CardSection