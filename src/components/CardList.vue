<template>
    <div id="card-list" class="container">
        <h1>Recherche de cartes</h1>
        <div class="search">
            <input v-model="query" type="text" name="search" class="input-text" placeholder="Rechercher un pokémon">
            <button class="btn" @click="checkRequestValidity()">Rechercher</button>
            <p v-if="pokemonsFromSearch.length > 0" class="add-in-cart">Cliquez sur une carte pour l'ajouter au panier</p>
        </div>
        <div v-if="showNoResult">
            <img src="../assets/no_result.jpg" alt="no result">
            <p class="text-15">Aucun pokemon trouvé</p>
        </div>
        <div class="content">
            <div v-for="(pokemon, idx) in pokemonsFromSearch" :key="idx" class="card" @click="addToCart(pokemon)" >
                <img :src="pokemon.images.small" :alt="`${pokemon.name} - ${pokemon.rarity}`">
                <small class="price text-10" >
                    {{ pokemon.price.amount }} €
                    <em class="holofoil">{{ pokemon.price.type }}</em>
                </small>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data () {
        return {
            query: ''
        }
    },
    computed: mapState([
        'pokemonsFromSearch',
        'showNoResult'
    ]),
    methods: {
        ...mapActions([
            'addToCart',
            'searchPokemons'
        ]),
        checkRequestValidity () {
            if (this.query != '') {
                this.searchPokemons(this.query);
                this.query = '';
            } else {
                console.error('NOPE');
            }
        }
    }
}
</script>
<style>
    /* CONTENT */
    #card-list, .search {
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
    }
    .card {
        cursor: pointer;
        overflow: hidden;
    }
    .content .card {
        max-width: 220px;
        max-height: 300px;
        transition: transform 0.3s;
    }
    .content .card:hover {
        z-index: 10;
        transform: scale(1.5) translateY(0);
    }
    .content .card:active {
        transform: scale(1.2) translateY(10%);
    }
    .content .card img{
        border-radius: 5px;
        display: block;
        width: 100%;
        height: 93%;
    }
    .content .card .price {
        display: block;
        background: linear-gradient(to bottom, #2196f3, #00bcd4);
        border-radius: 20px;
        color: #FFF;
        font-weight: 500;
    }
    .content .card .price .holofoil {
        color: antiquewhite;
        font-weight: 500;
        font-size: 0.8em;
    }
    .add-in-cart {
        margin-top: 20px;
    }
</style>