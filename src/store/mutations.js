const getTotalPrice = (pokemon) =>  (pokemon.price.amount * pokemon.quantity).toFixed(2);

export default {
    toggleMenu: state => state.showMenu = !state.showMenu,
    pushToCart: (state, card) => state.pokemonsInCart.push({
        id: card.id,
        quantity: 1,
        name: card.name,
        rarity: card.rarity,
        images: card.images,
        price: card.price
    }),
    incrementCard: (state, idx) => {
        state.pokemonsInCart[idx].quantity++;
        state.pokemonsInCart[idx].price.total = getTotalPrice(state.pokemonsInCart[idx]);
    },
    setPokemonsFromSearch: (state, pokemons) => {
        pokemons.forEach(pokemon => {
            console.log(pokemon);
            if (pokemon.tcgplayer && pokemon.tcgplayer.prices) {
                let priceType = Object.keys(pokemon.tcgplayer.prices);
                let amount = pokemon.tcgplayer.prices[priceType[0]].market.toFixed(2);
                pokemon.price = {
                    amount,
                    type: priceType[0],
                    total: amount
                }
            } else {
                pokemon.price = {
                    amount: 0,
                    type: 'ND',
                    total: 0
                }
            }
        });
        state.pokemonsFromSearch = pokemons;
    },
    searchInProgress: (state, searchInProgress) => state.searchInProgress = searchInProgress,
    showAddInCartNotif: state => state.showAddInCartNotif = !state.showAddInCartNotif,
    decrementCard: (state, index) => {
        if (state.pokemonsInCart[index].quantity > 1) {
            state.pokemonsInCart[index].quantity--;
            state.pokemonsInCart[index].price.total = getTotalPrice(state.pokemonsInCart[index]);
        } else {
            state.pokemonsInCart.splice(index, 1)
        }
    },
    removeFromCard: (state, index) => state.pokemonsInCart.splice(index, 1),
    showNoResult: (state, showNoResult) => state.showNoResult = showNoResult,
}