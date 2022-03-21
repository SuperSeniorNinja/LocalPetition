
import { Link } from "react-router-dom";



export const NavbarBottom = (props) => {
	



	return (

		<div>
		<Link to="/info"><img src={require('./img/info-circle.svg')} className="info-image"  /></Link>
		<nav className="nav under-navbar">
		<Link to="/" className={`nav__link ${ props.classstart}`} >
		    <i className="material-icons nav__icon " style={{'font-size': '35px'}} >home</i>
		    <span className="nav__text">Start</span>
		</Link>
		<Link to="/suche" className={`nav__link ${ props.classsearch}`}  >
		    <i className="material-icons nav__icon " style={{'font-size': '35px'}} >search</i>
		    <span className="nav__text">Suche</span>
		</Link>
		<Link to="/petition-erstellen" className="nav__link under-navitem-selected"  >
		    <i className="material-icons nav__icon" style={{'font-size': '55px'}}>add_circle_outline</i> 

		    <span className="nav__text"></span>
		</Link>
		<Link to="/activity" className={`nav__link ${ props.classactivity}`} >
		    <i className="material-icons nav__icon " style={{'font-size': '35px'}}>bolt</i>
		    <span className="nav__text">Aktivität</span>
		</Link>
		<Link to="/dein-profil" className={`nav__link ${ props.classprofile}`} >
		    <i className="material-icons nav__icon " style={{'font-size': '35px'}} >person</i>
		    <span className="nav__text">Profil</span>
		</Link>
	    </nav>
	    </div>
	)
}