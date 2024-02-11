import Card from "../card/Card";

const cards = ["siema", "elo", "benc", "siema", "elo", "benc"];

const CardList = () => {
	return (
		<div className="flex my-5 justify-between gap-3 w-full flex-wrap">
			{cards.map((item) => (
				<Card key={item} />
			))}
		</div>
	);
};

export default CardList;
