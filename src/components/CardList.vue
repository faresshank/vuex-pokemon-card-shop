<template>
    <div id="card-list" class="container">
        <h1>CardList</h1>
        <div class="search">
            <input type="text" name="search" class="input-text" placeholder="Rechercher un pokémon">
            <button class="btn">Rechercher</button>
        </div>
        <div class="content">
            <div class="card">3</div>
            <div class="card">3</div>
            <div class="card">3</div>
            <div class="card">3</div>
            <div class="card">3</div>
            <div class="card">3</div>
            <div class="card">3</div>
            <div class="card">3</div>
            <div class="card">3</div>
            <div class="card">3</div>
        </div>
    </div>
</template>

<script>
export default {
    
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
    .content .card {
        max-width: 220px;
        min-height: 250px;
        border: 1px solid goldenrod;
        border-radius: 10px;
    }
</style>