import axios from 'axios';
import { POKEMON_TCG_API_KEY, POKEMON_TCG_ENDPOINT } from '../config/config'

export default {
    toggleMenu: ({commit}) => commit('toggleMenu'),
    addToCart: ({state, commit}, card) => {
        let index = -1;
        state.items.find((item, idx) => {
            if (item.id === card.id) {
                index = idx;
            }
        })
        if (index == -1) {
          commit('pushToCart', card)
        } else {
          commit('incrementItemQuantity', index)
        }
    },
    searchPokemons: ({commit}, name) => {
        console.log(name);
        let query = POKEMON_TCG_ENDPOINT + `?q=name:${name}`;
        commit('setPokemonsFromSearch', [])
        commit('searchInProgress', true)
        axios.get(query,  {
            headers: { 'X-Api-Key': POKEMON_TCG_API_KEY}
        }).then( response => {
            console.log(response);
            commit('searchInProgress', false)
            commit('setPokemonsFromSearch', response.data.data)
        }).catch( error => {
            commit('searchInProgress', false)
            console.error(error);
        })
    }
}