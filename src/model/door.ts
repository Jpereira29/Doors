export class DoorModel {
    #number: number
    #havePresent: boolean
    #selection: boolean
    #open: boolean

    constructor(
        number: number,
        havePresent = false,
        selection = false,
        open = false) {
        this.#number = number
        this.#havePresent = havePresent
        this.#selection = selection
        this.#open = open
    }

    get number() {
        return this.#number
    }

    get havePresent() {
        return this.#havePresent
    }

    get selection() {
        return this.#selection
    }

    get openDoor() {
        return this.#open
    }

    get closeDoor() {
        return !this.#open
    }


    deselect() {
        const deselect = false
        return new DoorModel(this.number, this.#havePresent, deselect, this.#open )
    }

    alternateSelection() {
        const selection = !this.selection
        console.log(selection)
        return new DoorModel(this.number, this.#havePresent, selection, this.#open )
    }

    open() {
        const open = true
        return new DoorModel(this.number, this.#havePresent, this.#selection, open )
    }
}