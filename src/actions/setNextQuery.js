
import { SET_NEXT_QUERY } from '../types/types'

const setNextQuery = (obj) => {
    return {
        type: SET_NEXT_QUERY,
        obj: obj
    }
}

export default setNextQuery
