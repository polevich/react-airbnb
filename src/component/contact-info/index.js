import "./index.css"

export default function ContactInfo({
	name,
	image,
	rate,
	time,
	info,
	phone,
}) {
	return (
		<div className="title">
			<h1 className="title__text">Хозяин - {name}</h1>
			<div className="title__sub-block">
				<span className="title__sub-value">{phone}</span>
				<span className="title__sub-value">{time}</span>
				<span className="title__sub-value">{rate}% скорости отзыва</span>
			</div>
			<div>{info}</div>
		</div>
	)
}