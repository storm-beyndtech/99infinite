import useColorMode from "@/hooks/useColorMode";
import { Sun, Moon } from "lucide-react";

const DarkModeSwitcher = () => {
	const [colorMode, setColorMode] = useColorMode();

	return (
		<div className="grid place-content-center">
			<label
				className={`relative m-0 block h-7 w-12 rounded-full border-2 transition-colors duration-300 cursor-pointer ${
					colorMode === "dark" 
						? "bg-slate-700 border-slate-600" 
						: "bg-gray-200 border-gray-300"
				}`}
			>
				<input
					type="checkbox"
					checked={colorMode === "dark"}
					onChange={() => {
						if (typeof setColorMode === "function") {
							setColorMode(colorMode === "light" ? "dark" : "light");
						}
					}}
					className="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
				/>
				<span
					className={`absolute top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 ease-in-out ${
						colorMode === "dark" 
							? "translate-x-[26px] bg-slate-200" 
							: "translate-x-[2px] bg-white"
					}`}
				>
					{colorMode === "dark" ? (
						<Moon size={12} className="text-slate-700" />
					) : (
						<Sun size={12} className="text-yellow-500" />
					)}
				</span>
			</label>
		</div>
	);
};

export default DarkModeSwitcher;
