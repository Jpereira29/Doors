import { ReactNode } from 'react'
import styles from './styles.module.css'

type Props = {
    bgColor?: string
    children?: any
}

export function Card({ bgColor, children }: Props) {
    return (
        <div className={styles.card}
            style={{backgroundColor: bgColor ?? "#FFF"}}
        >
            {children}
        </div>
    )
}