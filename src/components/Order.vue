<template>
    <div id="card-list" class="container">
		<h1>Votre Panier</h1>
		<section>
			<table v-if="itemsInCart > 0">
				<thead>
					<tr>
						<th class="text-left w-40">CARTE</th>
						<th class="text-center w-15">PRIX UNITAIRE</th>
						<th class="text-center w-15">PRIX TOTAL</th>
						<th class="text-center w-15">QUANTITÉ</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(pokemon, idx) in pokemonsInCart" :key="idx" >
						<td class="text-left card_row">
							<img class="card_illustration" :src="pokemon.images.small" :alt="`${pokemon.name} - ${pokemon.rarity}`">
							<div>
								<p class="text-15">{{ pokemon.name }}</p>
								<p>{{ pokemon.rarity }}</p>
							</div>
						</td>
						<td class="text-center">
							<p class="text-15">{{pokemon.price.amount}} €</p>
							<small>{{pokemon.price.type}}</small>
						</td>
						<td class="text-center">
							<p class="text-15">{{pokemon.price.total}} €</p>
						</td>
						<td>
							<div class="order_widget product_line_widget">
								<span class="widget_minus" @click="decrementCard(idx)">-</span>
								{{ pokemon.quantity }}
								<span class="widget_catch" @click="incrementCard(idx)">+</span>
								<span class="order_widget product_line_remove" @click="removeFromCard(idx)">X</span>
							</div>
						</td>
					</tr>
					<tr>
						<td></td>
						<td class="upper">Total</td>
						<td class="text-15">{{ totalPrice }} €</td>
						<td class="text-15">{{ itemsInCart }} cartes</td>
					</tr>
				</tbody>
			</table>
			<div v-else>
				<h2 class="empty_illustration">Aucun produit dans votre panier</h2>
				<br><router-link class="btn" to="/">Retourner à l'accueil</router-link>
				<br>
				<img class="empty_illustration" src="../assets/empty_cart.png" alt="Panier vide">
			</div>
		</section>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    computed: {
		...mapState(['pokemonsInCart']),
		...mapGetters([
			'itemsInCart',
			'totalPrice'
		])
	},
	methods: mapActions([
		'decrementCard',
		'incrementCard',
		'removeFromCard'
	])
}
</script>

<style>
	.card_row {
		display: flex;
		align-items: center;
	}
	.card_illustration {
		width: 100%;
		padding: 10px;
		z-index: 1;
		transition: transform .2s;
	}
	.card_illustration:hover {
		transform: scale(1.5);
		z-index: 2;
	}
	.empty_illustration {
		margin-top: 5%;
		color: #6a7ad7 !important;
	}
	/* WIDGET */
	.order_widget .widget_minus {
		left: 20%;
	}
	.order_widget .widget_catch {
		left: 70%;
	}
	.order_widget.product_line_remove {
		position: absolute;
		top: -20%;
		right: -30%;
	}
	section {
		margin-top: 35px;
	}
	table {
		border-collapse: collapse;
		background: white;
		border-radius: 6px;
		width: 100%;
		position: relative;
	}
	table * {
		position: relative;
	}
	table td, table th {
		padding-left: 8px;
	}
	table thead tr {
		height: 60px;
		border-bottom: 1px solid gray;
		font-size: 16px;
	}
	table tbody tr {
		height: 120px;
		border-bottom: 1px solid #e3f1d5;
	}
	table tbody tr:last-child {
		border: 0;
	}
	@media screen and (max-width: 35.5em) {
		table {
			display: block;
		}
		table > *, table tr, table td, table th {
			display: block;
		}
		table thead {
			display: none;
			border-bottom: 1px solid;
		}
		table tbody tr {
			height: auto;
			padding: 8px 0;
		}
		table tbody tr td {
			padding-left: 45%;
			margin-bottom: 12px;
		}
		table tbody tr td:last-child {
			margin-bottom: 0;
		}
		table tbody tr td:before {
			position: absolute;
			font-weight: 700;
			width: 40%;
			left: 10px;
			top: 0;
		}
		table tbody tr td:nth-child(1):before {
			content: "Code";
		}
		table tbody tr td:nth-child(2):before {
			content: "Stock";
		}
		table tbody tr td:nth-child(3):before {
			content: "Cap";
		}
		table tbody tr td:nth-child(4):before {
			content: "Inch";
		}
		table tbody tr td:nth-child(5):before {
			content: "Box Type";
		}
	}
</style>