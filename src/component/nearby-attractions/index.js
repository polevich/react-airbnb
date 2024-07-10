import "./index.css"
import Box from "../box"
import ListItem from "../list-item"
import Heading from "../heading"

export default function NearbyAttractions({
	hasPool,
	hasGym,
	hasFreeBreakfast,
	hasFreeWiFi,
	hasParking,
	hasPetsAllowed,
	hasAirportShuttle,
	hasConciergeService,
	hasRoomService,
	hasChildFriendly,
}) {
	return (
		<Box>

			<ul className="amenities__list">
				<ListItem >
					<Heading>Удобства:</Heading>
				</ListItem>
				<ListItem >
					<span>{hasPool} Басейн</span>
				</ListItem>
			</ul>
		</Box>

	)
}