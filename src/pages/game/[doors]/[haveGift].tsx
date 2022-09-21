import { Door } from '../../../components/Door'
import { useEffect, useState } from 'react'
import { createDoor, updateDoor } from '../../../functions/doors'
import styles from '../../../styles/game.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {

    const [doors, setDoor] = useState([])

    const router = useRouter()

    useEffect(()=> {
        const doors = +router.query.doors
        const gitf = +router.query.haveGift
        setDoor(createDoor(doors, gitf))
    }, [router?.query])

    function renderDoor() {
        return doors.map(door => {
            return <Door key={door.number} value={door}
                onChange={newDoor => setDoor(updateDoor(doors, newDoor))} />
        })
    }

    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {renderDoor()}
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}
