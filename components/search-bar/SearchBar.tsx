const SearchBar = () => {
	return (
		<div className="w-full py-3 flex flex-col gap-5">
			<div className="">
				<p className="text-sm">
					<span className="text-2xl">178 results</span> in New York, US
				</p>
			</div>
			<div className="w-full flex gap-5 justify-between">
				<div className="bg-primary dark:bg-background-secondary-dark rounded-full w-full h-10"></div>
				<div className="bg-primary dark:bg-background-secondary-dark rounded-full w-1/3 h-10"></div>
			</div>
		</div>
	);
};

export default SearchBar;
