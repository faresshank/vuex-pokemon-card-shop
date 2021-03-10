<template>
    <div id="card-list" class="container">
		<h1>Votre Panier</h1>
		<section>
    <table>
		<thead>
			<tr>
				<th class="text-left w-15">Produit</th>
				<th></th>
				<th class="text-center w-15">PRIX</th>
				<th class="text-center w-15">QUANTITÉ</th>
				<th class="text-right w-15">TOTAL</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="text-left">image</td>
				<td class="text-left">Une description de la carte sélectionnée</td>
				<td>14.90€</td>
				<td>
					<div class="order_widget product_line_widget">
						<span class="widget_minus">-</span>
						1
						<span class="widget_catch">+</span>
					</div>
				</td>
				<td class="text-right">
					14.90€
					<span class="order_widget product_line_remove">X</span>
				</td>
			</tr>
			<tr>
				<td class="text-left">image</td>
				<td class="text-left">Une description de la carte sélectionnée</td>
				<td>14.90€</td>
				<td>
					<div class="order_widget product_line_widget">
						<span class="widget_minus">-</span>
						1
						<span class="widget_catch">+</span>
					</div>
				</td>
				<td class="text-right">
					14.90€
					<span class="order_widget product_line_remove">X</span>
				</td>
			</tr>
			<tr>
				<td class="text-left">image</td>
				<td class="text-left">Une description de la carte sélectionnée</td>
				<td>14.90€</td>
				<td>
					<div class="order_widget product_line_widget">
						<span class="widget_minus">-</span>
						1
						<span class="widget_catch">+</span>
					</div>
				</td>
				<td class="text-right">
					14.90€
					<span class="order_widget product_line_remove">X</span>
				</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td class="upper">Sous-total</td>
				<td class="text-right price">44.70€</td>
			</tr>
		</tbody>
    </table>
	</section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
	/* WIDGET */
	.order_widget .widget_minus {
		left: 10%;
	}
	.order_widget .widget_catch {
		left: 70%;
	}
	.order_widget.product_line_remove {
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