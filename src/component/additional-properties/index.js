import "./index.css"
import Box from "../box"
import ListItem from "../list-item"
import Heading from "../heading"

export default function AdditionalProperties({
	houseRules,
	cancellationPolicy,
	localTransportation,
	hostLanguages,
	specialOffers,
	checkinInstructions,
}) {
	return (
		<Box>

			<ul className="list">
				<ListItem >
					<Heading>Дополнительный свойства:</Heading>
				</ListItem>
				<ListItem title={"Правила дому"}>
					<span>{houseRules}</span>
				</ListItem>
				<ListItem title={"Політика скасування"}>
					<span>{cancellationPolicy}</span>
				</ListItem>
				<ListItem title={"Місцевий транспорт"}>
					<span>{localTransportation}</span>
				</ListItem>
				<ListItem title={"Мови хоста"}>
					<span>{hostLanguages}</span>
				</ListItem>
				<ListItem title={"Спеціальні пропозиції:"}>
					<span>{specialOffers}</span>
				</ListItem>
				<ListItem title={"Інструкції щодо реєстрації"}>
					<span>{checkinInstructions}</span>
				</ListItem>
			</ul>
		</Box >

	)
}