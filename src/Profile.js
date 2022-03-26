
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
				<img src={require('./img/profile.png')} className="profile-picture-fullscreen" />
				<br />
				<span><img className="link-profile" src={require('./img/link.svg')} /><Link className="profile-link" to="">Link</Link></span>
				<p>Profilbeschreibung</p>
				<p><img className="location-marker-profile" src={require('./img/location-marker-profile.svg')} />Standort</p>




			</div>
			<NavbarBottom classstart="under-navitem-selected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-unselected" />
		</div>
	)

}