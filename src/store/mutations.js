export default {
    toggleMenu: state => state.showMenu = !state.showMenu,
    pushToCart: (state, card) => state.pokemonsInCart.push({
        id: card.id,
        quantity: 1,
        name: card.name,
        rarity: card.rarity,
        images: card.images,
    }),
    incrementItemQuantity: (state, idx) => state.pokemonsInCart[idx].quantity ++,
    setPokemonsFromSearch: (state, pokemons) => state.pokemonsFromSearch = pokemons,
    searchInProgress: (state, searchInProgress) => state.searchInProgress = searchInProgress,
    showAddInCartNotif: state => state.showAddInCartNotif = !state.showAddInCartNotif,
    decrementCard: (state, index) => {
        let pokemon = state.pokemonsInCart[index];
        if (pokemon.quantity > 1) {
            state.pokemonsInCart[index].quantity--;
        } else {
            console.log(index);
            state.pokemonsInCart.splice(index, 1)
        }
    },
    incrementCard: (state, index) => state.pokemonsInCart[index].quantity++,
    removeFromCard: (state, index) => state.pokemonsInCart.splice(index, 1),
    showNoResult: (state, showNoResult) => state.showNoResult = showNoResult
}