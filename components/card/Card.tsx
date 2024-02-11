import Image from "next/image";

const Card = () => {
	return (
		<div className="flex flex-col p-3 gap-3 w-full md:w-[48%] xl:w-[32%] justify-between bg-primary dark:bg-background-dark border dark:border-background-secondary-dark max-h-[390px] rounded-[10%]">
			<Image
				alt="just a house"
				src={
					"https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
				}
				width={200}
				height={200}
				quality={100}
				className="w-full h-[60%] object-cover rounded-b-xl rounded-t-3xl"
			/>
			<div className="flex flex-col gap-3 justify-between w-full">
				<div className="flex gap-3 text-center w-full">
					<div className="w-1/3 bg-background dark:bg-background-dark border dark:border-background-secondary-dark rounded-xl p-2">
						Siema
					</div>
					<div className="w-1/3 bg-background dark:bg-background-dark border dark:border-background-secondary-dark rounded-xl p-2">
						Siema
					</div>
					<div className="w-1/3 bg-background dark:bg-background-dark border dark:border-background-secondary-dark rounded-xl p-2">
						Siema
					</div>
				</div>
				<div className="bg-background dark:bg-background-dark border dark:border-background-secondary-dark w-full rounded-b-3xl rounded-t-lg flex items-center justify-start py-1 overflow-hidden">
					<div className="flex gap-8 sm:gap-4 xl:gap-6 xl:px-10 px-5 items-center">
						<h2 className="font-semibold text-2xl">$220,000</h2>
						<div>
							<p className="font-medium line-clamp-1">109 Eastman Ests</p>
							<p className="text-sm line-clamp-1">Rochester, NY 146234</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
