import {CountriesActionTypes as ActionTypes}from '../types/actionType';
export const fecthCountries=(searchQuery)=>({

    type:ActionTypes.fecth_Countries,
    searchQuery
});
export const fecthCountriesResult=(hasError,countries)=>({
    type:ActionTypes.fecth_countries_result,
    hasError,
    countries,
});
export const changeSearchQuery =(searchQuery)=>({
    type:ActionTypes.change_search_query,
    searchQuery,
});