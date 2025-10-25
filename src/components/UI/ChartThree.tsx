import type { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeState {
	series: number[];
}

const options: ApexOptions = {
	chart: {
		type: "donut",
		background: "transparent",
		fontFamily: "Inter, sans-serif",
		foreColor: "rgba(255, 255, 255, 0.8)",
		toolbar: { show: false },
	},
	colors: ["#14b8a6", "#ea580c", "#164e63", "#0d9488"],
	labels: ["Gold", "Silver", "Platinum", "Palladium"],
	legend: {
		show: true,
		position: "bottom",
		horizontalAlign: "center",
		fontFamily: "Inter",
		fontSize: "12px",
		labels: {
			colors: "rgba(255, 255, 255, 0.8)",
		},
		markers: {
			size: 8,
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
	responsive: [
		{
			breakpoint: 2600,
			options: {
				chart: {
					width: 380,
				},
			},
		},
		{
			breakpoint: 640,
			options: {
				chart: {
					width: 200,
				},
			},
		},
	],
};

const ChartThree: React.FC = () => {
	const [state] = useState<ChartThreeState>({
		series: [45, 25, 20, 10],
	});

	return (
		<div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-xl">
			<div className="flex justify-between items-center mb-6">
				<div>
					<h5 className="text-white text-lg font-semibold">Asset Distribution</h5>
					<p className="text-white/70 text-sm">Portfolio allocation</p>
				</div>
				<div>
					<div className="relative">
						<select className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-gsp-teal">
							<option value="current">Current</option>
							<option value="target">Target</option>
						</select>
						<span className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
							<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z" fill="rgba(255,255,255,0.7)"/>
							</svg>
						</span>
					</div>
				</div>
			</div>

			<div id="chartThree" className="flex justify-center mb-6">
				<ReactApexChart options={options} series={state.series} type="donut" width={280} />
			</div>

			<div className="grid grid-cols-2 gap-3">
				<div className="flex items-center">
					<span className="mr-2 block h-3 w-3 rounded-full bg-gsp-teal"></span>
					<p className="flex w-full justify-between text-sm font-medium text-white/90">
						<span>Gold</span>
						<span>45%</span>
					</p>
				</div>
				<div className="flex items-center">
					<span className="mr-2 block h-3 w-3 rounded-full bg-gsp-orange"></span>
					<p className="flex w-full justify-between text-sm font-medium text-white/90">
						<span>Silver</span>
						<span>25%</span>
					</p>
				</div>
				<div className="flex items-center">
					<span className="mr-2 block h-3 w-3 rounded-full bg-gsp-navy"></span>
					<p className="flex w-full justify-between text-sm font-medium text-white/90">
						<span>Platinum</span>
						<span>20%</span>
					</p>
				</div>
				<div className="flex items-center">
					<span className="mr-2 block h-3 w-3 rounded-full bg-teal-600"></span>
					<p className="flex w-full justify-between text-sm font-medium text-white/90">
						<span>Palladium</span>
						<span>10%</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ChartThree;
