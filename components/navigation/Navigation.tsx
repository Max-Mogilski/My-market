import React from "react";
import { ThemeSelect } from "../theme-select/ThemeSelect";

function Navigation() {
	return (
		<div className="w-full py-4 border-b border-primary dark:border-background-secondary-dark mb-4">
			<div className="md:px-[10%] p-4 flex justify-between items-center">
				<h2 className="text-2xl font-medium">Home</h2>
				<ThemeSelect />
			</div>
		</div>
	);
}

export default Navigation;
