
import { NavbarBottom } from "./NavbarBottom";

import { Link } from "react-router-dom";

export const Info = () => {


	return (

		<div >

			<div className="casual-header-div">
				<h4 className="headline">Info</h4>
			</div>
			<div className="casual-menu"  >
			<Link style={{color: "black"}}  to="/impressum"> <p>  <strong>Impressum </strong></p> </Link>
			<Link style={{color: "black"}} to="/datenschutz"><p> <strong>Datenschutzerklärung</strong></p> </Link>
			</div>

			<NavbarBottom classstart="under-navitem-unselected" classsearch="under-navitem-unselected"  classactivity="under-navitem-unselected" classprofile="under-navitem-unselected"/>
		</div >
	)

}