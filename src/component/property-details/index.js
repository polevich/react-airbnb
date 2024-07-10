import "./index.css"
import Box from "../box"
import ListItem from "../list-item"
import Heading from "../heading"
import guest from "./guest.svg"
import bedroom from "./bedroom.svg"
import bed from "./bed.svg"
import bath from "./bath.svg"

export default function PropertyDetails({ guests, bedrooms, beds, baths, }) {
	return (
		<Box>

			<ul className="property__list">
				<ListItem >
					<Heading>Детали свойства:</Heading>
				</ListItem>
				<ListItem imageSrc={guest}>
					<span>{guests} гости</span>
				</ListItem>
				<ListItem imageSrc={bedroom}>
					<span>{bedrooms} спальня</span>
				</ListItem>
				<ListItem imageSrc={bed} >
					<span>{beds} кровать</span>
				</ListItem>
				<ListItem imageSrc={bath}>
					<span>{baths} ванная комната</span>
				</ListItem>
			</ul>
		</Box>

	)
}