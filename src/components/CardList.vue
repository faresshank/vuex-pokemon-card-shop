<template>
    <div id="card-list" class="container">
        <h1>CardList</h1>
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
        border: 1px solid goldenrod;
        border-radius: 5px;
        transition: transform 0.3s;
    }
    .content .card:hover {
        transform: scale(1.5) translateY(0);
    }
    .content .card:active {
        transform: scale(1.2) translateY(10%);
    }
    .content .card img{
        width: 100%;
        height: 100%;
    }
    .add-in-cart {
        margin-top: 20px;
    }
</style>