
import { SET_FILTERTYPE } from '../types/types'

const setFilterType = (obj) => {
    return {
        type: SET_FILTERTYPE,
        obj: obj
    }
}

export default setFilterType
