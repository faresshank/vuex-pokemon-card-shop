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
    searchPokemons: ({commit}) => {
        commit('setPokemonsFromSearch', [
            {
                id: 1,
                name: 'Alakazam'
            },
            {
                id: 2,
                name: 'Pikachu'
            },
            {
                id: 3,
                name: 'Salamèche'
            }
        ])
    }
}