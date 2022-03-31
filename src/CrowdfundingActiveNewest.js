
import { NavbarBottom } from "./NavbarBottom";
import { Link } from "react-router-dom";
import { Crowdfundingcampaign } from "./Crowdfundingcampaign";

import Spielplatz from "./img/playground_petition.jpg";
import Radweg from "./img/bikeway.jpg";
import Bunker from "./img/bunker.jpg";

export const CrowdfundingActiveNewest = () => {


	return (
		<div >
			<div id="header">
				<p className="location" id="location"> (Standort)<Link to="/filter">
					<img id="filter" src={require('./img/funnel-fill.svg')} /> </Link> </p>





				<p className="menu1 small-headlines   ">
					<Link to="/" className="">
						Petitionen </Link>
					|
					<Link to="/crowdfunding-aktiv-neuste" className="strong"> Crowdfunding
					</Link>
				</p>

				<p className="menu2 small-headlines ">
					<Link to="/crowdfunding-aktiv-neuste" className="strong">
						Aktiv </Link>
					|
					<Link to="/crowdfunding-erfolgreich-neuste" className=""> Erfolgreich
					</Link>
				</p>

				<p className="last-menu small-headlines">
					<Link to="/crowdfunding" className="">
						Am nächsten </Link>
					|
					<Link to="/crowdfunding-aktiv-neuste" className="strong"> Neuste
					</Link>
				</p>
			</div>


			<div className="campaigns">
				<Crowdfundingcampaign crowdfundingtitel="Fahrradweg" crowdfundingpicture={Radweg} crowdfundingbeschreibung="Doppelspuriger Fahrradweg nach Mühlheim" />
				<Crowdfundingcampaign crowdfundingtitel="Bunker" crowdfundingpicture={Bunker} crowdfundingbeschreibung="Bunker für Groß und Klein in Nippes" />
				<Crowdfundingcampaign crowdfundingtitel="Spielplatz" crowdfundingpicture={Spielplatz} crowdfundingbeschreibung="Spielplatz mit Kletterspinne und Rutsche" />

			</div>
			<NavbarBottom classstart="under-navitem-selected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-unselected" />
		</div>
	)

}