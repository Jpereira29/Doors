import { DoorModel } from "../../model/door"
import { Gift } from "../Gift"
import styles from "./styles.module.css"


interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export function Door({ value, onChange }: DoorProps) {
    const door = value
    const selection = door.selection && !door.openDoor ? styles.selection : ''

    const alternateSelection = e => onChange(door.alternateSelection())
    const open = e => {
        e.stopPropagation()
        onChange(door.open())
    }

    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.doorHandle} onClick={open}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternateSelection}>
            <div className={`${styles.structure} ${selection}`}>
                {door.closeDoor ? renderDoor() : door.havePresent ? <Gift /> : false}
            </div>
            <div className={styles.botton} />
        </div>
    )
}