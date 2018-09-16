import { Action } from "@ngrx/store";


export const SET_FILTRO = '[Filtro] Set Fitro';
export  type allowedFilter = "all" | 'completed' | "pending";

export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;

    constructor(public filter: allowedFilter) {}
}

export type actions = SetFiltroAction;