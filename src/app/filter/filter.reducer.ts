import * as fromFilter from "./filter.actions";


const initState: fromFilter.allowedFilter = "all";

export function filterReducer( state = initState, action: fromFilter.actions) {
    switch(action.type) {
        case fromFilter.SET_FILTRO:
            return action.filter;
        default: 
            return state;
    }

}