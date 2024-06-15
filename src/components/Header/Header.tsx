import React from "react"
import styles from "./Header.module.css"

interface HeaderProps {
    title: string
}

function Header({ title }: HeaderProps) {


    return (
        <header className={styles.header}>
            <span className={styles.title}>{title}</span>
        </header>
    )
}

export default Header