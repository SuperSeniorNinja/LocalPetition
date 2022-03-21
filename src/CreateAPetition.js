
import { NavbarBottom } from "./NavbarBottom";
import { Link } from "react-router-dom";



export const CreateAPetition = () => {

	const handleSubmit = (e) => {
		e.preventDefault();




	}




	return (


		<div >
			<div className="casual-header-div">
				<h4 className="headline">Erstelle eine Petition</h4>

			</div>


			<div className="casual-menu">

				<form onSubmit={handleSubmit} >
					<p className="Pflichtfeld"  >* = Pflichtfeld</p>
					<br />
					<p className="create-titel create-font-size"  >*Titel:</p>
					<input className="create-titel-input" maxLength="50" required/>
					<br />
					<br />

					<p className="create-font-size" >Bild/Video:</p>
					<input type="file" className="create-image" />
					<br />
					<br />

					<p className="create-font-size" >*Beschreibung:</p>
					<textarea cols="100" className="create-description-input" rows="10" maxLength="350" required></textarea>

					<br />
					<br />

					<p className="create-font-size" >*Standort:</p>
					<img  src={require('./img/map_create.png')} className="MapCreate" />

					<br />
					<br />
					<br />

					<button type="submit" className="btn btn-success btn-lg button" >Erstellen</button>
				</form>
			</div>

			<NavbarBottom classstart="under-navitem-unselected" classsearch="under-navitem-unselected"  classactivity="under-navitem-unselected" classprofile="under-navitem-unselected" />
		</div>
	)

}