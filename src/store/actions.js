import axios from 'axios';
import { POKEMON_TCG_API_KEY, POKEMON_TCG_ENDPOINT } from '../config/config';
import { PRICE_NOT_DEFINED } from './globals';

const toggleCommit = (commit, commitName, timeout) => {
    commit(commitName);
    setTimeout(() => {
        commit(commitName);
    }, timeout)
}

export default {
    toggleMenu: ({commit}) => commit('toggleMenu'),
    addToCart: ({state, commit}, card) => {
        let index = -1;
        state.pokemonsInCart.find((item, idx) => {
            if (item.id === card.id) {
                index = idx;
            }
        })
        if (index == -1) {
            if (card.price.type == PRICE_NOT_DEFINED) {
                toggleCommit(commit, 'showAddInCartError', 2500);
            }
            else {
                commit('pushToCart', card);
            }
        } else {
            commit('incrementCard', index);
        }
        if (!state.showAddInCartNotif && card.price.type != PRICE_NOT_DEFINED) {
            toggleCommit(commit, 'showAddInCartNotif', 1200);
        }
    },
    searchPokemons: ({commit}, name) => {
        let query = POKEMON_TCG_ENDPOINT + `?q=name:${name}`;
        commit('setPokemonsFromSearch', []);
        commit('searchInProgress', true);
        axios.get(query,  {
            headers: { 'X-Api-Key': POKEMON_TCG_API_KEY}
        }).then( response => {
            commit('searchInProgress', false);
            if (response.data.data.length > 0) {
                commit('showNoResult', false);
                commit('setPokemonsFromSearch', response.data.data);
            } else {
                commit('showNoResult', true);
            }
        }).catch( error => {
            commit('searchInProgress', false);
            console.error(error);
        })
    },
    decrementCard: ({commit}, index) => commit('decrementCard', index),
    incrementCard: ({commit}, index) => commit('incrementCard', index),
    removeFromCard: ({commit}, index) => commit('removeFromCard', index),
}