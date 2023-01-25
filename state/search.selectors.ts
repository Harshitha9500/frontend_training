import {createSelector} from '@ngrx/store';
import { AppStateInterface } from "../types/appState.interface";

export const selectFeature=(state:AppStateInterface)=>state.search;

export const collegeSelector=createSelector(selectFeature,(state)=>{
    state.collegeName;
});

export const bookSelector=createSelector(selectFeature,(state)=>{
    state.bookName;
});