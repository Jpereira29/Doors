import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { NumberInput } from "../components/NumberInput";
import { validationForm } from "../functions/doors";
import styles from "../styles/home.module.css"
export default function Home() {

  const [qtdDoors, setQtdDoors] = useState(3)
  const [haveGift, setHaveGift] = useState(2)

  useEffect(() => {
    if (!validationForm(qtdDoors, haveGift)) {
      setQtdDoors(3)
      setHaveGift(2)
    }
  }, [qtdDoors, haveGift])

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#C0392C">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Quantidade de Portas"
            value={qtdDoors}
            haveGift={haveGift}
            qtdDoors={qtdDoors}
            onChange={newQuantities => setQtdDoors(newQuantities)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Porta com Presente"
            value={haveGift}
            haveGift={haveGift}
            qtdDoors={qtdDoors}
            onChange={newDoorHaveGift => setHaveGift(newDoorHaveGift)}
          />
        </Card>
        <Card bgColor="#28A085">
          <Link href={`/game/${qtdDoors}/${haveGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
