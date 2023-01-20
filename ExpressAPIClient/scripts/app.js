import { indexMarine, createMarine, showMarine, deleteMarine, updateMarine } from "./api";
import {
    onShowMarineSuccess,
    onFail,
    onCreateMarineSuccess,
    onShowMarineSuccess,
    onIndexMarineSuccess,
    onDeleteMarineSuccess,
    onUpdateMarineSuccess
} from './ui'

const createMarineForm = document.querySelector('#create-marine-form')
const indexMarineContainer = document.querySelector('#index-character-container')
const showMarineContainer = document.querySelector('#show-marine-container')

indexMarine()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexMarineSuccess(res.marines)
    })
    .catch(onFail)

createMarineForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const marineData = {
        marine: {
            firstName: event.target['firstName'].value,
            lastName: event.target['lastName'].value,
            affilation: event.target['affilation'].value,
            legion: event.target['legion'].value
        },
    }
    createMarine(marineData)
        .then(onCreateMarineSuccess)
        .catch(onFail)
})

indexMarineContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    showMarine(id)
        .then((res) => res.json())
        .then((res) => onShowMarineSuccess(res.marine))
        .catch(onFail)
})

showMarineContainer.addEventListener('submit', (event) => {
    event.preventDefault()

    const id = event.target.getAttribute('data=id')

    const marineData = {
        marine: {
            firstName: event.target['firstName'].value,
            lastName: event.target['lastName'].value,
            affilation: event.target['affilation'].value,
            legion: event.target['legion'].value
        },
    }
    if(!id) return
    updateMarine(marineData, id)
        .then(onUpdateMarineSuccess)
        .catch(onFail)
})

showMarineContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    if(!id) return
    deleteMarine(id)
        .this(onDeleteMarineSuccess)
        .catch(onFail)
})