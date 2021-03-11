<template>
    <div id="card-list" class="container">
        <h1>CardList</h1>
        <div class="search">
            <input type="text" name="search" class="input-text" placeholder="Rechercher un pokémon">
            <button class="btn" @click="searchPokemons()">Rechercher</button>
        </div>
        <div class="content">
            <div v-for="(pokemon, idx) in pokemonsFromSearch" :key="idx" class="card" @click="addToCart(pokemon)" >
                id: {{ pokemon.id }}<br>
                name: {{ pokemon.name }}<br>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: mapGetters([
        'pokemonsFromSearch'
    ]),
    methods: mapActions([
        'addToCart',
        'searchPokemons'
    ])
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
    }
    .content .card {
        max-width: 220px;
        min-height: 250px;
        border: 1px solid goldenrod;
        border-radius: 10px;
    }
</style>