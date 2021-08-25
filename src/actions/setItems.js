
import { SET_ITEMS } from '../types/types'

const setItems = (obj) => {
    return {
        type: SET_ITEMS,
        obj: obj
    }
}

export default setItems
