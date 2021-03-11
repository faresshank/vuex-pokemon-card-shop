<template>
    <div id="header" class="upper">
        <router-link class="title" to="/">Pokemon Card Shop</router-link>
        <div class="cart_info">
            <div class="cart_info_pokeball" @click="toggleMenu()">
                <span class="pokeball_top"></span>
                <span class="pokeball_bottom"></span>
                <span class="count" v-if="itemsInCart > 0">{{ itemsInCart }}</span>
                <span class="count_empty" v-if="itemsInCart == 0">PANIER</span>
            </div>
            <div v-if="itemsInCart > 0" class="cart_info_submenu" :class="[!showMenu ? 'hide-right' : '']">
                <p v-for="(pokemon, idx) in pokemonsFromCart" :key="idx" class="product_line">
                    <span class="product_line_name">{{ pokemon.name }}</span>
                    <span class="product_line_widget">
                        <span class="widget_minus">-</span>
                        <span class="product_line_count">x{{ pokemon.quantity }}</span>
                        <span class="widget_catch">+</span>
                    </span>
                    <span class="product_line_remove">X</span>
                </p>
                <div class="text-right submenu_actions" @click="toggleMenu()">
                    <router-link  class="btn" to="/order" >Voir mon panier</router-link>
                </div>
            </div>
            <div v-else class="cart_info_submenu" :class="[!showMenu ? 'hide-right' : '']">
                <p class="product_line">
                    <span class="product_line_no_product">Aucune carte dans votre panier</span>
                </p>
            </div>
        </div>
    </div>
</template> 

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: mapGetters([
        'showMenu',
        'total',
        'itemsInCart',
        'pokemonsFromCart'
    ]),
    methods: mapActions([
        'toggleMenu'
    ])
}
</script>
<style>
    #header {
        border-bottom: 4px solid #d93832;
        background-color: #FFF;
        padding: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title {
        font-size: 2em;
        text-decoration: none;
    }
    .cart_info {
        position: relative;
        display: flex;
        border: 2px solid #c5c5c5;
        border-radius: 50px;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
    }
    .cart_info:hover {
        cursor: pointer;
    }
    .cart_info .cart_info_pokeball {
        position: relative;
    }
    .cart_info_pokeball {
        width: 60px;
        height: 60px;
        background-color: #333;
        border-radius: 50%;
        user-select: none;
    }
    /* POKEBALL */
    .pokeball_top, .pokeball_bottom {
        position: absolute;
        top: 28%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 22px;
        width: 50px;
        border-radius: 150px 150px 0 0;
        background-color: #d93832;
    }
    .pokeball_bottom {
        top: initial;
        bottom: -9%;
        transform: translate(-50%, -50%) rotateZ(180deg);
        background-color: #FFF;
    }
    .count, .count_empty {
        position: absolute;
        color: #2077da;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3em;
        text-shadow: 0px 0px 2px #000;
    }
    .count_empty {
        top: 65%;
        font-size: 1em;
    }
    .cart_info_amount {
        position: relative;
        min-width: 100px;
        color: #9f9f9f;
    }
    .cart_info_submenu {
        z-index: 5;
        position: absolute;
        top: 120%;
        right: 0;
        background-color: white;
        padding: 10px;
        border: 2px solid #c5c5c5;
        min-width: 330px;
        border-radius: 10px;
        text-align: left;
        transition: all .3s ease-in-out;
        user-select: none;
    }
    .cart_info_submenu.hide-right {
        right: -550%;
    }
    .cart_info_submenu:hover {
        cursor: initial;
    }
    .submenu_actions {
        margin: 30px 15px 15px;
    }
    /* PRODUCT LINE */
    .product_line {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }
    /* PRODUCT LINE WIDGET */
    .product_line_name {
        width: 40%;
    }
    .product_line_widget, .product_line_name, .product_line_remove {
        font-size: 1.4em;
    }
    .product_line_widget {
        position: relative;
        color: #333333;
    }
    .widget_minus, .widget_catch {
        font-weight: 500;
        font-size: 1.8em;
        position: absolute;
        top: 0;
        left: -50%;
        height: 22px;
        width: 22px;
        text-align: center;
        line-height: 17px;
        border-radius: 50%;
        background-color: #c5c5c5;
        cursor: pointer;
        color: #FFF;
    }
    .widget_catch {
        font-size: 1.4em;
        line-height: 20px;
        left: 100%;
    }
    .product_line_count {
        font-size: 1em;
        text-transform: initial;
        margin: 0 10px;
    }
    .product_line_remove {
        color: #d93832;
    }
    .product_line_remove:hover {
        cursor: pointer;
    }
</style>