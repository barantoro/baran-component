<template>
	<v-card
		class="mx-auto"
		width="100%"
		:color="cardBackground"
		:elevation="cardElevation"
	>
		<apexchart :options="chartOptions" :series="series" />
	</v-card>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
	chartOptions: {
		type: Object,
		default: () => ({
			chart: {
				id: "vuechart-example",
				type: "area",
				toolbar: {
					show: false,
				},
			},
			fill: {
				colors: ["#7367f0"],
				type: "gradient",
				gradient: {
					shade: "light",
					type: "vertical",
					shadeIntensity: 0,
					opacityFrom: 0.5,
					opacityTo: 0,
				},
			},
			grid: {
				show: false,
				padding: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				},
			},
			xaxis: {
				labels: {
					show: false,
				},
				categories: ["Monday", "Tuesday", "Wednesday", "Thursday"],
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
				width: 2,
			},
			title: {
				text: "Average Daily Sales",
				align: "left",
				margin: 10,
				offsetX: 10,
				offsetY: 10,
				floating: false,
				style: {
					fontSize: "18px",
					fontWeight: "normal",
					color: "#343C6A",
				},
			},
			subtitle: {
				text: "$320,99",
				align: "left",
				margin: 10,
				offsetX: 10,
				offsetY: 40,
				floating: false,
				style: {
					fontSize: "24px",
					fontWeight: "bold",
					color: "#343C6A",
				},
			},
			yaxis: {
				labels: {
					show: false,
				},
			},
			legend: {
				show: false,
			},
			responsive: [
				{
					breakpoint: 1000,
					options: {
						plotOptions: {
							bar: {
								horizontal: false,
							},
						},
						legend: {
							position: "bottom",
						},
					},
				},
			],
		}),
	},
	series: {
		type: Array,
		default: () => [
			{
				name: "Sales",
				data: [400, 200, 650, 500],
			},
		],
	},
	cardBackground: {
		type: String,
		default: "#fff",
	},
	cardElevation: {
		type: Number,
		default: 0,
	},
});
</script>
