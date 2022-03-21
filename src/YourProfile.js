
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
				<p className="profile-name">Name  <Link to=""> <img src={require('./img/edit.svg')} /></Link> </p>


				<br />

				<img src={require('./img/profile.png')} className="profile-picture-fullscreen" />


				<br />
				<Link to=""> <img src={require('./img/edit.svg')} /></Link>
			
				<br />
				<Link className="profile-link" to=""><p>Link  <img src={require('./img/edit.svg')} /></p></Link>

				<p>Profilbeschreibung <Link to=""> <img src={require('./img/edit.svg')} /></Link></p>
				<p>Standort <Link to=""> <img src={require('./img/edit.svg')} /></Link></p>
			</div>
			<NavbarBottom classstart="under-navitem-unselected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-selected" />
		</div>
	)

}