export default {
    showMenu: state => state.isMenuOpen,
    total: () => 32,
    itemsInCart: state => {
        return state.items.reduce((total, card) => {
            return total + card.quantity
        }, 0);
    },
    pokemonsFromSearch: state => state.pokemonsFromSearch,
    pokemonsFromCart: state => state.items,
    searchInProgress: state => state.searchInProgress,
}