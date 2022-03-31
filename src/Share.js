
import { NavbarBottom } from "./NavbarBottom";

import { Link } from "react-router-dom";

export const Share = () => {


	return (

		<div >


			<div className="casual-header-div">
				<h4 className="headline">Teilen</h4>
			</div>




			<div className="casual-menu">
				<div style={{float: "right"}} >

					<a href="https://twitter.com/share?url=https://prototyp.lokalpetition.de" target="_blank"><button  className="btn btn-success share-button-link"  >Twitter</button></a>
					<br /> <br />
					<a href="whatsapp://send?text=https://prototyp.lokalpetition.de" data-action="share/whatsapp/share"><button className="btn btn-success share-button-link" >WhatsApp</button></a>
					<br /> <br />
					<a href="https://t.me/share/url?url=https://prototyp.lokalpetition.de"><button  className="btn btn-success share-button-link"  >Telegram</button></a>
					<br /> <br />
					
					
					
					
					<a href="https://www.linkedin.com/shareArticle?url=https://prototyp.lokalpetition.de&title=LocalPetition"><button  className="btn btn-success share-button-link"  >LinkedIn</button></a>
					<br /> <br />

					<a href="https://reddit.com/submit?url=https://prototyp.lokalpetition.de&title=LocalPetition"><button  className="btn btn-success share-button-link"  >Reddit</button></a>
					<br /> <br />
					<a href="https://instagram.com"><button  className="btn btn-success share-button-link" >Instagram</button></a>
					<br /> <br /> 
					<a href="https://www.facebook.com/sharer/sharer.php?u=prototyp.lokalpetition.de" target="_blank"><button  className="btn btn-success share-button-link"  >Facebook</button></a>
					

				</div>

			</div>


			<NavbarBottom classstart="under-navitem-unselected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-unselected"/>
		</div >
	)

}