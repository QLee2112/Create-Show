const indexMarineContainer = document.querySelector('#index-marine-container')
const messageContainer = document.querySelector('#message-container')
const showMarineContainer = document.querySelector('#show-marine-container')

export const onIndexMarineSuccess = (marine) => {
    marine.forEach(marine => {
        dispatchEvent.innerHTML = `
        <h1>${marine.firstName} ${marine.lastName}</h1>
        <button data-id = "${marine._id}">Show Marine</button>`
    })
}

export const onFail = (error) => {
    messageContainer.innerHTML = `
    <h1>There is an error</h1>
    <p>${error}</p>`
}

export const onCreateMarineSuccess = () => {
    messageContainer.innerText = 'You have create an Astartes!'
}

export const onShowMarineSuccess = (marine) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <h1>${marine.firstName} ${marine.lastName}</h1>
    <p>${marine.affilation}</p>
    <p>${marine._id}`

    showMarineContainer.appendChild(div)
}

export const onUpdateMarineSuccess = () => {
    messageContainer.innerText = 'Update was a success'
}

export const onDeleteMarineSuccess = () => {
    messageContainer.innerText = 'BANG, that marine is de ... gone'
}