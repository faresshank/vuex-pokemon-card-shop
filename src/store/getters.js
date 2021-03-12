export default {
    itemsInCart: state => {
        return state.pokemonsInCart.reduce((total, card) => {
            return total + card.quantity;
        }, 0);
    },
    totalPrice: state => {
        return state.pokemonsInCart.reduce((total, card) => {
            return (parseFloat(total) + card.price.amount * card.quantity).toFixed(2);
        }, 0);
    }
}