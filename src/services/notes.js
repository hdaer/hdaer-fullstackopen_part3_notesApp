import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/notes'
const baseUrl = '/api/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

export default {
    getAll,
    create,
    update
}
// above is shorthand for below
// export default {
//     getAll: getAll,
//     create: create,
//     update: update
// }