import "./index.css"
import Box from "../box"

export default function Price({
	price,
	discount,
	currency,
	...rest
}) {
	return <Box className="price">
		<div class="price__header">
			<span className={`price__value ${discount ? "price__value--has-discount" : ""}`}>
				{currency} {price}
			</span>
			{discount && (
				<span className={`price__value`}>
					{currency} {discount}
				</span>
			)}
		</div>

		<List {...rest} currency={currency} />
	</Box>
}

function List({ currency, cleaning = 0, service = 0, checkin, checkout }) {
	return (
		<ul className="price__list">
			<li className="price__list-item">
				<span>Плата за уборку:</span>
				<span>{currency} {cleaning}</span>
			</li>
			<li className="price__list-item">
				<span>Сервисный сбор:</span>
				<span>{currency} {service}</span>
			</li>
			<li className="price__list-item">
				<span>Дата прибытия:</span>
				<span>{checkin}</span>
			</li>
			<li className="price__list-item">
				<span>Дата отъезда:</span>
				<span>{checkout}</span>
			</li>
		</ul>
	)
}