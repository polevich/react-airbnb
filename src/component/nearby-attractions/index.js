import "./index.css"
import Box from "../box"
import ListItem from "../list-item"
import Heading from "../heading"
import { Fragment } from "react"

export default function NearbyAttractions({ list }) {
	return (
		<Box>
			<ul className="attractions__list">
				<ListItem >
					<Heading>Достопримечательности поблизости</Heading>
				</ListItem>
				{list.map(({ id, ...rest }) => (
					<Fragment key={id}>
						<Item {...rest} />
					</Fragment>
				))}
			</ul>
		</Box>
	)
}

function Item({ name, link }) {
	return (
		<ListItem >
			<a href={link}>{name}</a>
		</ListItem>
	)
}