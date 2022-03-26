

import { NavbarBottom } from "./NavbarBottom";
import { Link } from "react-router-dom";


export const Filter = () => {


	return (
		<div>
			<div className="casual-header-div">





				<h4 className="headline"> Erweiterter Filter </h4>

			</div>




			<div className="casual-menu">
				<h3><strong>(Standort)</strong></h3><Link to="/karte"> <img src={require('./img/marker.svg')} /></Link>
				<hr />


				<h3><strong>Reichweite: </strong></h3>
				<p> <span className="range-description">1 km</span> <input className="range" type="range" min="1" 
					max="100" /> <span className="range-description">Welt</span></p>
				<hr />


				<h3><strong><Link to="/abstimmfilter"> <img className="range-info"
					src={require('./img/info-circle.svg')} /></Link> Abstimmfilter: </strong></h3>
				<br />
				<div className="btn-group">
					<button className="btn btn-success left-menu">Relevante Votes</button>

					<button type="button" className="btn btn-success right-menu"><strong>Votes insgesamt</strong></button>
				</div>
				<hr />
				<h3><strong><Link to="/erstellzeit-filter"> <img className="range-info"
					src={require('./img/info-circle.svg')} /></Link> Erstellzeit-Filter:</strong></h3><br />
				<div className="btn-group">
					<button type="button" className="btn btn-success left-menu">Tag</button>


					<button type="button" className="btn btn-success right-menu">Woche</button>
				</div>
				<br /><br />
				<div className="btn-group" >
					<button type="button" className="btn btn-success left-menu">Monat </button>

					<button type="button" className="btn btn-success middle-menu">Jahr</button>
					<button type="button" className="btn btn-success right-menu"><strong>Alles</strong></button>
				</div>




			</div>
			<NavbarBottom classstart="under-navitem-selected" classsearch="under-navitem-unselected"  classactivity="under-navitem-unselected" classprofile="under-navitem-unselected"/>
		</div >
	)

}