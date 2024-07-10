import "./index.css"
import Box from "../box"
import ListItem from "../list-item"
import Heading from "../heading"
import pool from "./pool.svg"
import gym from "./gym.svg"
import breakfast from "./breakfast.svg"
import wifi from "./wifi.svg"
import parking from "./parking.svg"
import pet from "./pet.svg"
import airport from "./airport.svg"
import concierge from "./concierge.svg"
import room from "./room.svg"
import child from "./child.svg"


export default function Amenities({
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

			<ul className="price__list">
				<ListItem >
					<Heading>Удобства:</Heading>
				</ListItem>
				<ListItem imageSrc={pool}>
					<span>{hasPool} Басейн</span>
				</ListItem>
				<ListItem imageSrc={gym}>
					<span>{hasGym} Спортивний зал</span>
				</ListItem>
				<ListItem imageSrc={breakfast}>
					<span>{hasFreeBreakfast} Бесплатный завтрак</span>
				</ListItem>
				<ListItem imageSrc={wifi}>
					<span>{hasFreeWiFi} Бесплатный Fi-Fi</span>
				</ListItem>
				<ListItem imageSrc={parking}>
					<span>{hasParking} Бесплатный уличный паркинг</span>
				</ListItem>
				<ListItem imageSrc={pet}>
					<span>{hasPetsAllowed} Разрешено размещение с домашними животными</span>
				</ListItem>
				<ListItem imageSrc={airport}>
					<span>{hasAirportShuttle} Трансфер до/из аэропорта</span>
				</ListItem>
				<ListItem imageSrc={concierge}>
					<span>{hasConciergeService} Консьерж-сервис</span>
				</ListItem>
				<ListItem imageSrc={room}>
					<span>{hasRoomService} Обслуживание номеров</span>
				</ListItem>
				<ListItem imageSrc={child}>
					<span>{hasChildFriendly} Подходит для детей</span>
				</ListItem>

			</ul>
		</Box>

	)
}