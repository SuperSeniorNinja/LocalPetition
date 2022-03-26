
import { NavbarBottom } from "./NavbarBottom";
import { Link } from "react-router-dom";



export const YourProfile = () => {




	return (


		<div >
			<div className="casual-header-div">
				<Link to="/einstellungen"   >  <img className="settings-image" src={require('./img/settings.svg')} />  </Link>
				<h4 className="headline headline-profilesettings"> Dein Profil </h4>
			</div>




			<div className="casual-menu">
				<p className="profile-name">Name<Link to=""><img src={require('./img/edit.svg')} /></Link> </p>


				<br />

				<img src={require('./img/profile.png')} className="profile-picture-fullscreen" />


				<br />
				<Link  to=""><img className="margin-bottom" src={require('./img/edit.svg')} /></Link>
			
				<br />
				<span><img className="link-profile" src={require('./img/link.svg')} /><Link className="profile-link" to="">Link <img src={require('./img/edit.svg')} /></Link></span>
				

				<p>Profilbeschreibung <Link to=""> <img src={require('./img/edit.svg')} /></Link></p>
				<p><img className="location-marker-profile" src={require('./img/location-marker-profile.svg')} />Standort <Link to=""> <img src={require('./img/edit.svg')} /></Link></p>
			</div>
			<NavbarBottom classstart="under-navitem-unselected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-selected" />
		</div>
	)

}