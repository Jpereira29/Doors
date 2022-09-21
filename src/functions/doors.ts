import { DoorModel } from "../model/door";

export function createDoor(value: number, havePresent: number): DoorModel[] {
    return Array.from({ length: value }, (_, i)=> {
        const number = i + 1
        const gift = number === havePresent
        return new DoorModel(number, gift)
    })
}

export function updateDoor(doors: DoorModel[], doorMod: DoorModel): DoorModel[] {
    return doors.map(door => {
        const iqualMod = door.number === doorMod.number

        if(iqualMod) {
            return doorMod
        }
        else {
            return doorMod.openDoor ? door : door.deselect()
        }
    })
}

export function validationForm(qtdDoor: number, giftDoor: number) {
    if(giftDoor > qtdDoor || giftDoor < 1) {
        alert("A porta com presente deve estar inclusa no número de portas!")
        return false
    }
    if(qtdDoor < 3) {
        alert("3 é a quatidade mínima de portas!")
        return false
    }

    return true
}