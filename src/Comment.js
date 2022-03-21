
import { useState } from "react";
import upvoteempty from "./img/arrow-up.svg";
import upvotefull from "./img/arrow-up-fill.svg";
import downvoteempty from "./img/arrow-down.svg";
import downvotefull from "./img/arrow-down-fill.svg";

import { Link } from "react-router-dom";

export const Comment = (props) => {

	const [sumcounter, setSumcounter] = useState(0);


	const [upvotecounter, setUpvotecounter] = useState(0);

	const [downvotecounter, setDownvotecounter] = useState(0);


	const [upvoteimage, setUpvoteimage] = useState(upvoteempty);

	const [downvoteimage, setDownvoteimage] = useState(downvoteempty);



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

	return (

		<div className="single-comment" >

			
				<div className="campaign-header">
					<button className="btn btn-success button small"><img className="clock" src={require('./img/clock-fill.svg')}
				/> Zeit</button>
					<Link to="/melden">
						<img className="report-comments" src={require('./img/three-dots.svg')} />
					</Link>
					<div>
						<Link to="/profil">
							<button className="btn btn-success button small">Erstellername
								<img src={require('./img/profile.png')} className="profile-picture" />
							</button>
						</Link>

					</div>
				</div>

				<p className="comment"> {props.comment} </p>
			
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
						<Link to="">
							<img src={require('./img/comments.svg')} className="comments-img" />
							<span className="comments-counter"> 0</span> </Link>

					</div>


					<Link to="/teilen"> <img src={require('./img/share.svg')} className="share-button" /></Link>

				</div>

			
		</div >
	)

}
