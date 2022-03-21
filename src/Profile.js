
import { NavbarBottom } from "./NavbarBottom";
import { Link } from "react-router-dom";


export const Profile = () => {


	return (
		<div >
			<div className="casual-header-div">
				<h4 className="headline"> Profil </h4>
			</div>

			<div className="casual-menu">
				<p className="profile-name">Name</p>
				<br />
				<img src={require('./img/profile.png')}  className="profile-picture-fullscreen" />
				<br />
				<Link className="profile-link" to=""><p>Link</p></Link>
				<p>Profilbeschreibung</p>
				<p>Standort
				</p>
				

				
				
			</div>
			<NavbarBottom classstart="under-navitem-selected" classsearch="under-navitem-unselected"  classactivity="under-navitem-unselected" classprofile="under-navitem-unselected"/>
		</div>
	)

}