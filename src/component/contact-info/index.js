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
		<div className="contact">
			<div className="contact__first">
				<img src={image} alt={name} className="contact__photo" />
				<div className="contact__two">
					<h1 className="contact__text">Хозяин - {name}</h1>
					<div className="contact__sub-block">
						<span className="contact__sub-value">{phone}</span>
						<span className="contact__sub-value">{time}</span>
						<span className="contact__sub-value">{rate}% скорости отзыва</span>
					</div>
				</div>
			</div>
			<div>{info}</div>
		</div>
	)
}