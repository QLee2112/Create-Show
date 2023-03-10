export const indexMarine = () => {
    return fetch(`http://localhost:3001/marines`)
}

export const createMarine = (data) => {
    return fetch(`http://localhost:3001/marines`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
export const showMarine = (id) => {
    return fetch(`http://localhost:3001/marines/${id}`)
}

export const updateMarine = (data, id) => {
    event.preventDefault()
    return fetch(`http://localhost:3001/marines/${id}`), {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}

export const deleteMarine = (id) => {
    return fetch(`http://localhost:3001/marines/${id}`, {
        method: 'DELETE'
    })
}