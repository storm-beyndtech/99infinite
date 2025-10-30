import type { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const getChartOptions = (): ApexOptions => ({
	colors: ["#3C50E0", "#80CAEE"],
	grid: {
		show: true,
		borderColor: "#e5e7eb", // gray-200 - subtle grid lines
		strokeDashArray: 8,
		position: "back",
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	chart: {
		fontFamily: "Satoshi, sans-serif",
		type: "bar",
		height: 335,
		stacked: true,
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: "#6b7280", // gray-500 - works on both light and dark themes
		background: "transparent",
	},
	responsive: [
		{
			breakpoint: 1536,
			options: {
				plotOptions: {
					bar: {
						borderRadius: 0,
						columnWidth: "25%",
					},
				},
			},
		},
	],
	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: 0,
			columnWidth: "25%",
			borderRadiusApplication: "end",
			borderRadiusWhenStacked: "last",
		},
	},
	dataLabels: {
		enabled: false,
	},
	xaxis: {
		categories: ["M", "T", "W", "T", "F", "S", "S"],
		labels: {
			style: {
				colors: Array(7).fill("#6b7280"), // gray-500 - works on both light and dark themes
				fontSize: "12px",
			},
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
	},
	yaxis: {
		labels: {
			style: {
				colors: "#6b7280", // gray-500 - works on both light and dark themes
				fontSize: "12px",
			},
		},
	},
	legend: {
		position: "top",
		horizontalAlign: "left",
		fontFamily: "Satoshi",
		fontWeight: 500,
		fontSize: "14px",
		labels: {
			colors: "#6b7280", // gray-500 - works on both light and dark themes
		},
	},
	fill: {
		opacity: 1,
	},
});

const ChartTwo: React.FC = () => {
	// Removed theme detection logic since we now use universal gray colors

	const state = {
		series: [
			{
				name: "Trades",
				data: [44, 55, 41, 67, 22, 43, 65],
			},
			{
				name: "Interests",
				data: [13, 23, 20, 8, 13, 27, 15],
			},
		],
	};

	// Theme detection logic removed - using universal gray colors

	return (
		<div className="col-span-12 rounded-2xl border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-gray-950 xl:col-span-4">
			<div className="mb-4 justify-between gap-4 sm:flex">
				<div>
					<div className="relative z-20 inline-block">
						<select
							name="#"
							id="#"
							className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none text-gray-900 dark:text-gray-100"
						>
							<option value="">This Week</option>
							<option value="">Last Week</option>
						</select>
					</div>
				</div>
			</div>

			<div id="chartTwo">
				<style>
					{`
            .apexcharts-text {
              fill: #6b7280 !important;
            }
            .apexcharts-legend-text {
              color: #6b7280 !important;
            }
          `}
				</style>
				<ReactApexChart options={getChartOptions()} series={state.series} type="bar" height={400} />
			</div>
		</div>
	);
};

export default ChartTwo;
