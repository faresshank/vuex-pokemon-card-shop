<template>
    <div id="card-list" class="container">
        <h1>CardList</h1>
        <div class="search">
            <input v-model="query" type="text" name="search" class="input-text" placeholder="Rechercher un pokémon">
            <button class="btn" @click="checkRequestValidity()">Rechercher</button>
        </div>
        <div class="content">
            <div v-for="(pokemon, idx) in pokemonsFromSearch" :key="idx" class="card" @click="addToCart(pokemon)" >
                <img :src="pokemon.images.small" :alt="`${pokemon.name} - ${pokemon.rarity}`">
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data () {
        return {
            query: ''
        }
    },
    computed: mapGetters([
        'pokemonsFromSearch'
    ]),
    methods: {
        ...mapActions([
            'addToCart',
            'searchPokemons'
        ]),
        checkRequestValidity () {
            if (this.query != '') {
                this.searchPokemons(this.query);
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
    }
    .content .card {
        max-width: 220px;
        max-height: 300px;
        border: 1px solid goldenrod;
        border-radius: 10px;
        transition: transform 0.3s;
    }
    .content .card:hover {
        transform: scale(2);
    }
    .content .card img{
        width: 100%;
        height: 100%;
    }
</style>