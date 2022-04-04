import { useState } from "react";
import upvoteempty from "./img/arrow-up.svg";
import upvotefull from "./img/arrow-up-fill.svg";
import downvoteempty from "./img/arrow-down.svg";
import downvotefull from "./img/arrow-down-fill.svg";
import pinimageempty from "./img/pin.svg";
import pinimagefull from "./img/pin-fill.svg";
import { Link } from "react-router-dom";

export const Petition = (petition) => {




	const [sumcounter, setSumcounter] = useState(0)


	const [upvotecounter, setUpvotecounter] = useState(0)

	const [downvotecounter, setDownvotecounter] = useState(0)


	const [upvoteimage, setUpvoteimage] = useState(upvoteempty)

	const [downvoteimage, setDownvoteimage] = useState(downvoteempty)


	const [pinimage, setPinimage] = useState(pinimageempty)

	const [supporters, setSupporters] = useState(0)

	const [amount, setAmount] = useState()




	const upvote = () => {

		if (upvotecounter == 0) {
			setUpvotecounter(upvotecounter + 1)

			setSumcounter(sumcounter + 1)
			setUpvoteimage(upvotefull)
			if (downvotecounter == -1) {
				setDownvotecounter(downvotecounter + 1)
				setSumcounter(sumcounter + 2)
				setDownvoteimage(downvoteempty)
			}
		}

		if (upvotecounter == 1) {
			setUpvotecounter(upvotecounter - 1)

			setSumcounter(sumcounter - 1)
			setUpvoteimage(upvoteempty)


		}


	}




	const downvote = () => {
		if (downvotecounter == 0) {
			setDownvotecounter(downvotecounter - 1)
			setSumcounter(sumcounter - 1)
			setDownvoteimage(downvotefull)
			if (upvotecounter == 1) {
				setUpvotecounter(upvotecounter - 1)

				setSumcounter(sumcounter - 2)
				setUpvoteimage(upvoteempty)
			}
		}

		if (downvotecounter == -1) {
			setDownvotecounter(downvotecounter + 1)
			setSumcounter(sumcounter + 1)
			setDownvoteimage(downvoteempty)
		}
	}






	const mark = () => {

		if (pinimage == pinimageempty) {
			setPinimage(pinimagefull)
		}
		if (pinimage == pinimagefull) {
			setPinimage(pinimageempty)
		}



	}






	const handleSubmit = (e) => {
		e.preventDefault()
		if (supporters == 0) {
			setSupporters(1)
		}


		setAmount("")
	}







	return (

		<div className="single-campaign">

			<div className="campaign-header">
				<Link to="/karte"><button className="btn btn-success button small"><img className="location-marker" src={require('./img/location.svg')}
				/>(Distanz)<img className="clock" src={require('./img/clock-fill.svg')}
					/>(Zeit)</button></Link>
				<Link to="/melden"> <img src={require('./img/three-dots.svg')} className="report" /> </Link>
				<div>
					<Link to="/profil"><button className="btn btn-success button small">(Erstellername)
						<img src={require('./img/profile.png')} className="profile-picture" />
					</button></Link>
					<br />
					<img src={pinimage} className="marker-image" onClick={mark}
						id="marker-svg" />
				</div>
			</div>
			<p id="petition-titel"> {petition.titel} </p>




			<br />



			<img src={petition.bild} className="petition-picture" />



			<br />
			<br />

			<p> {petition.beschreibung} </p>


			<p id="donation-statements"> Spendenzusagen: </p>


			<Link to="/spendenzusagen" id="Supporters" className="unterstützer-link">
				{supporters}
			</Link>

			<form onSubmit={handleSubmit}>
				<p className="amount-p">
					 <input type="number" min="1" value={amount} className="amount" id="inputAmount" placeholder="Betrag" onChange={(e) => setAmount(Number(e.target.value))} required /><span
					id="euros">,00€</span></p>




				<button className="btn btn-success btn-lg button" type="submit" id="Donate">Spende zusagen</button>
			</form>
			<br />

			<div className="interaction-bar">




				<div className="voting-div">
					<div> <img onClick={upvote} src={upvoteimage} className="voting-button" id="upvotebutton" />
						<Link className="linkblack" to="/upvoter">
							<p id="upvotes" className="voting-counter-upanddown ">{upvotecounter}</p>
						</Link>
					</div>

					<p id="votes" className="voting-counter-sum">{sumcounter}</p>


					<div> <img onClick={downvote} src={downvoteimage} className="voting-button" id="downvotebutton" />
						<Link className="linkblack" to="/downvoter">
							<p id="downvotes" className=" voting-counter-upanddown ">{downvotecounter}</p>
						</Link>
					</div>
				</div>

				<div className="comments-div">
					<Link to="/neuste-kommentare">
						<img src={require('./img/comments.svg')} className="comments-img" />
						<span className="comments-counter"> 0</span> </Link>

				</div>


				<Link to="/teilen"> <img src={require('./img/share.svg')} className="share-button" /></Link>

			</div>
			<div className="divider-horizontal-rule">
				<hr />
			</div>
		</ div>
	)

}