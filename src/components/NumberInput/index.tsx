import { useEffect } from "react"
import { validationForm } from "../../functions/doors"
import styles from "./styles.module.css"

type Props = {
    text: string
    value: number
    qtdDoors: number
    haveGift: number
    onChange: (newValue: number) => void
}

export function NumberInput({ onChange, text, value, qtdDoors, haveGift}: Props) {

    return (
        <div className={styles.numberInput}>
            <span className={styles.text}>{text}</span>
            <span className={styles.value}>{value}</span>

            <div className={styles.buttons}>
                <button className={styles.btn} onClick={()=> onChange(value - 1)}>-</button>
                <button className={styles.btn} onClick={()=> onChange(value + 1)}>+</button>
            </div>
        </div>
    )
}