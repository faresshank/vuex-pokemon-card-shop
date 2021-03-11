export default {
    toggleMenu: state => state.isMenuOpen = !state.isMenuOpen,
    pushToCart: (state, card) => state.items.push({
        id: card.id,
        quantity: 1,
        name: card.name,
        rarity: card.rarity,
        images: card.images,
    }),
    incrementItemQuantity: (state, idx) => state.items[idx].quantity ++,
    setPokemonsFromSearch: (state, pokemons) => state.pokemonsFromSearch = pokemons,
    searchInProgress: (state, searchInProgress) => state.searchInProgress = searchInProgress
}