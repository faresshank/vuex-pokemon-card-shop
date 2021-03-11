export default {
    itemsInCart: state => {
        return state.pokemonsInCart.reduce((total, card) => {
            return total + card.quantity
        }, 0);
    }
}