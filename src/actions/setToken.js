
import { SET_TOKEN } from '../types/types'

const setToken = (obj) => {
    return {
        type: SET_TOKEN,
        obj: obj
    }
}

export default setToken
