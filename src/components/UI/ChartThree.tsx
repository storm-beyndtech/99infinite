import type { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeState {
	series: number[];
}

const getChartOptions = (): ApexOptions => ({
	chart: {
		type: "donut",
		background: "transparent",
		fontFamily: "Inter, sans-serif",
		foreColor: "#6b7280", // gray-500 - works on both light and dark themes
		toolbar: { show: false },
		height: 350,
	},
	colors: ["#14b8a6", "#ea580c", "#164e63"],
	labels: ["Starter", "Advanced", "Master"],
	legend: {
		show: true,
		position: "right",
		horizontalAlign: "center",
		fontFamily: "Inter",
		fontSize: "12px",
		fontWeight: 500,
		labels: {
			colors: "#6b7280", // gray-500 - works on both light and dark themes
		},
		markers: {
			size: 8,
			shape: "circle",
		},
	},
	plotOptions: {
		pie: {
			donut: {
				size: "60%",
				background: "transparent",
			},
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: false,
		width: 0,
	},
	responsive: [
		{
			breakpoint: 1536,
			options: {
				chart: {
					height: 300,
				},
			},
		},
		{
			breakpoint: 1024,
			options: {
				chart: {
					height: 280,
				},
			},
		},
		{
			breakpoint: 768,
			options: {
				chart: {
					height: 250,
				},
			},
		},
		{
			breakpoint: 640,
			options: {
				chart: {
					height: 220,
				},
			},
		},
	],
});

const ChartThree: React.FC = () => {
	const [state] = useState<ChartThreeState>({
		series: [45, 25, 20],
	});

	// Removed theme detection logic since we now use universal gray colors

	return (
		<div className="bg-white/40 dark:bg-gray-100/5 backdrop-blur-lg border border-gray-200/50 dark:border-white/20 rounded-xl p-6 shadow-xl h-fit lg:h-full w-full">
			<div className="mb-6 flex justify-between items-center">
				<div>
					<h4 className="text-gray-900 dark:text-white text-lg font-semibold">Position Performance</h4>
				</div>
				<div>
					<div className="relative">
						<select className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg px-3 py-1 text-gray-900 dark:text-white text-sm appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gsp-teal">
							<option value="current">Current</option>
							<option value="target">Target</option>
						</select>
						<span className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
							<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
									fill="#6b7280"
								/>
							</svg>
						</span>
					</div>
				</div>
			</div>

			<div className="flex flex-col h-full">
				<div id="chartThree" className="flex-1 flex justify-center items-center -mx-2">
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
					<ReactApexChart
						options={getChartOptions()}
						series={state.series}
						type="donut"
						height={350}
						width="100%"
					/>
				</div>
			</div>
		</div>
	);
};

export default ChartThree;
