
import { Link } from "react-router-dom";
import { Petition } from "./Petition";
import { NavbarBottom } from "./NavbarBottom";
import Spielplatz from "./img/playground_petition.jpg";
import Parkbank from "./img/bench.jpg";
import Sportplatz from "./img/sportsfield.jpg";
import Radweg from "./img/bikeway.jpg";


export const Petitions = () => {


	return (
		<div >

			<div id="header">



				<p className="location" id="location">(Standort)<Link to="/filter"><img id="filter"
					src={require('./img/funnel-fill.svg')} /> </Link> </p>


				<p className="menu1 small-headlines"> <Link className="strong" to="/">Petitionen</Link> | <Link
					to="/crowdfunding">Crowdfunding</Link>
				</p>
				<p className="menu2 small-headlines "> <Link to="/" className="strong">Aktiv </Link>|<Link
					to="/petitionen-akzeptiert" className="" > Akzeptiert </Link>| <Link to="/petitionen-abgelehnt" className="">
						Abgelehnt </Link> </p>
				<p className="last-menu small-headlines"> <Link to="/" className="strong">Am nächsten </Link>| <Link
					to="/petitionen-aktiv-neuste" className=""> Neuste </Link>| <Link to="/petitionen-aktiv-am-beliebtesten" className=""> Beliebtest</Link> </p>

			</div>
			<div className="campaigns">

				<Petition titel="Spielplatz" beschreibung="Toller neuer Spielplatz" bild={Spielplatz} />

				<Petition titel="Parkbank" beschreibung="Krasse neue Parkbank im Nordpark" bild={Parkbank} />
				<Petition titel="Sportplatz" beschreibung="Mega nicer neuer Sportplatz" bild={Sportplatz} />
				<Petition titel="Fahrradweg" beschreibung="Bester Fahrradweg nach Mühlheim" bild={Radweg} />
			</div>
			<NavbarBottom classstart="under-navitem-selected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-unselected" />
		</div>
	)

}
