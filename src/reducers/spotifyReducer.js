import { SET_ITEMS, SET_FILTERTYPE, SET_TOKEN, SET_NEXT_QUERY} from "../types/types";


const initialState = {
    spotifyItems: [],
    filterType: 'track',
    token: '',
    nextQuery:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                spotifyItems: action.obj,    
            }
        case SET_FILTERTYPE:
            debugger;
            return {
                ...state,
                filterType: action.obj,    
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.obj,    
            } 
        case SET_NEXT_QUERY:
            return {
                ...state,
                nextQuery: action.obj,    
            }     
                      

        default:
            return state;
    }
}