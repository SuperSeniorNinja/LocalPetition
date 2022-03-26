
import { Link } from "react-router-dom";
import { useState } from "react";

import pinimageempty from "./img/pin.svg";
import pinimagefull from "./img/pin-fill.svg";

export const Crowdfundingcampaign = (props) => {

	const [pinimage, setPinimage] = useState(pinimageempty);
	

	const mark = () => {

		if (pinimage == pinimageempty) {
			setPinimage(pinimagefull)
		}
		if (pinimage == pinimagefull) {
			setPinimage(pinimageempty)
		}



	}


 /* 	const getInputValue = (event) => {

		const userValue = event.target.value;

		setAmountdonated(userValue);

	
		setProgressbarwidth( {  width : '50%',});
	};


	const donate = () => {

		setDonators(1)



	}
	*/

	/*const [donate, setDonate] = useState(0);
	const [target, setTarget] = useState(100);
	const [progress, setProgress] = useState(0); */


const [donators, setDonators] = useState(0);
	/*const [amountdonated, setAmountdonated] = useState(0);
	const [progressbarwidth, setProgressbarwidth] = useState(0 + "%"); 
*/
	const handleSubmit = (e) => {
		e.preventDefault();
		
	/*	const number = Number(e.target.input.value);
	
		setDonators(1);
		setAmountdonated((prevState) => prevState + number); */

		if (donators == 0) {
			setDonators(1)
		}

	
	}

	return (
		<div >
			<div className="crowdfunding-campaign">
				<div className="campaign-header">
					<Link to="/karte">
						<button className="btn btn-success button small">
							<img className="location-marker" src={require('./img/location.svg')} />Distanz <img className="clock" src={require('./img/clock-fill.svg')}
				/> Zeit
						</button>
					</Link>
					<Link to="/melden">
						<img className="report-crowdfunding-campaign" src={require('./img/three-dots.svg')} />
					</Link>

					<img className="marker-image-crowdfunding" id="marker-svg" src={pinimage} onClick={mark} />
				</div>

				<p id="crowdfunding-titel"> {props.crowdfundingtitel}</p>
				<br />

				<img src={props.crowdfundingpicture} className="petition-picture" />

				<br />
				<br />

				<p className="crowdfunding-description"> {props.crowdfundingbeschreibung} </p>

				<div className="progress donation-bar">
					<div className="progress-bar bg-success button "   id="progressbar"></div>
				</div>
				<p className="moneyprogress">
					<span id="Donated">0</span>€ von (geforderter Betrag)
				</p>

				<Link className="linkblack donors" to="/spender">
					{donators} Spender
				</Link>

				<form onSubmit={handleSubmit}>
				<p className="amount-p">
					<input type="number" min="1" class="amount" id="input"  placeholder="Betrag" required/><span
						id="euros">,00€</span>
				</p>

				<button className="btn btn-success btn-lg button" type="submit" id="Donate">Spenden</button>
				</form>
				<br />
				<br />

				<Link to="/fragen" className="fragen-crowdfunding linkblack strong">
					Fragen

				
				</Link>

				<Link to="/teilen">

					<img src={require('./img/share.svg')} className="share-crowdfunding" alt="" />

				</Link>
			</div>
		</div>
	)

}



