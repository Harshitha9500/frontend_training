import {Action, createReducer, on} from '@ngrx/store';
import * as searchActions from '../state/search.actions'

export interface State {
    collegeName:string;
    bookName:string;
}

export const initialState:State={
    collegeName:"",
    bookName:""
}

export const searchReducer=createReducer(
    initialState,
    on(searchActions.search,(state,{coll,book})=>{
        return {
            ...state,
            collegeName:coll,
            bookName:book
    }
    })
)
