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


		</div>
	)
}