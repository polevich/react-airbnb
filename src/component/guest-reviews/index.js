import { Fragment } from "react"
import Heading from "../heading"
import Box from "../box"
import "./index.css"

export default function GuestReviews({ list }) {
	return (
		<div className="room__block">
			<Heading border>Відгуки клієнтів</Heading>

			<div className="room__list">
				{list.map(({ id, ...rest }) => (
					<Fragment key={id}>
						<Item {...rest} />
					</Fragment>
				))}
			</div>
		</div>
	)
}

function Item({ guestName, rating, review }) {
	return (
		<Box className="room">
			<span className="room__title">{guestName}</span>
			<span className="room__info">Рейтинг: {rating}</span>
			<span className="room__price">{review}</span>
		</Box>
	)
}