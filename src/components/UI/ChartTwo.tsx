import type { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const getChartOptions = (): ApexOptions => ({
	colors: ["#14b8a6", "#ea580c"], // Using gsp-teal and gsp-orange from the design
	grid: {
		show: true,
		borderColor: "#e5e7eb", // gray-200 - subtle grid lines
		strokeDashArray: 0,
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
		row: {
			colors: undefined,
			opacity: 0.05,
		},
		column: {
			colors: undefined,
			opacity: 0.05,
		},
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	chart: {
		fontFamily: "Inter, sans-serif",
		type: "bar",
		height: 350,
		stacked: false,
		toolbar: { show: false },
		zoom: { enabled: false },
		foreColor: "#6b7280", // gray-500 - works on both light and dark themes
		background: "transparent",
	},
	responsive: [
		{
			breakpoint: 1536,
			options: {
				plotOptions: { bar: { borderRadius: 0, columnWidth: "15%" } },
			},
		},
	],
	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: 4,
			columnWidth: "60%",
			borderRadiusApplication: "end",
			borderRadiusWhenStacked: "last",
			dataLabels: {
				position: "top",
			},
		},
	},
	dataLabels: { enabled: false },
	xaxis: {
		categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
			formatter: function (value) {
				return "€" + value.toFixed(0);
			},
		},
	},
	legend: {
		position: "bottom",
		horizontalAlign: "center",
		fontFamily: "Inter",
		fontWeight: 500,
		fontSize: "12px",
		labels: {
			colors: "#6b7280", // gray-500 - works on both light and dark themes
		},
		markers: {
			size: 8,
			shape: 'circle',
		},
	},
	fill: { opacity: 1 },
});

interface ChartTwoState {
	series: {
		name: string;
		data: number[];
	}[];
}

const ChartTwo: React.FC = () => {
	const [state] = useState<ChartTwoState>({
		series: [
			{
				name: "Portfolio Value",
				data: [44, 55, 21, 27, 62, 43, 65],
			},
			{
				name: "Investments",
				data: [13, 23, 30, 48, 53, 27, 15],
			},
		],
	});

	// Removed theme detection logic since we now use universal gray colors

	return (
		<div className="bg-white/40 dark:bg-gray-100/5 backdrop-blur-lg border border-gray-200/50 dark:border-white/20 rounded-xl p-6 shadow-xl h-full w-full">
			<div className="mb-6 flex justify-between items-center">
				<div>
					<h4 className="text-gray-900 dark:text-white text-lg font-semibold">Portfolio Performance</h4>
					<p className="text-gray-600 dark:text-white/70 text-sm">Last 7 days</p>
				</div>
				<div>
					<div className="relative">
						<select className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg px-3 py-1 text-gray-900 dark:text-white text-sm appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gsp-teal">
							<option value="week">This Week</option>
							<option value="month">This Month</option>
						</select>
						<span className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
							<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z" fill="#6b7280"/>
							</svg>
						</span>
					</div>
				</div>
			</div>

			<div>
				<div id="chartTwo" className="-mx-2">
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
					<ReactApexChart options={getChartOptions()} series={state.series} type="bar" height={350} />
				</div>
			</div>
		</div>
	);
};

export default ChartTwo;
