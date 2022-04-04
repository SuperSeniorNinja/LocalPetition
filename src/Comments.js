
import { NavbarBottom } from "./NavbarBottom";
import { Comment } from "./Comment";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Comments = () => {

	const [amount, setAmount] = useState()

	const handleSubmit = (e) => {
		e.preventDefault()


		setAmount("")

	}

	return (


		<div >
			<div className="casual-header-div">
				<div className="comments-header">
					<h4>Kommentare (0)</h4>
					<p>
						<Link to="/neuste-kommentare"><strong>Neuste</strong></Link> | <Link to="/beliebteste-kommentare">Beliebtest</Link>
					</p>
				</div>
			</div>
			<div className="comment-menu">
				<Comment comment="Tolle Idee!" />


			</div>
			<form onSubmit={handleSubmit}>
				<div className="comment-bar">
					<input value={amount} type="text" className="comment-input" placeholder="Kommentieren" onChange={(e) => setAmount(e.target.value)} required />
					<button type="submit" className="btn btn-ghost-light comment-button">
						<img className="comment-image" src={require('./img/send-comment.svg')} />
					</button>
				</div>

			</form>

			<NavbarBottom classstart="under-navitem-selected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-unselected" />
		</div >
	)

}