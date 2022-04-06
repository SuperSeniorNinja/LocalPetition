
import { NavbarBottom } from "./NavbarBottom";

import * as React from 'react';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


const Input = styled('input')({
	display: 'none',
});



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
					<input className="create-titel-input" maxLength="50" required />
					<br />
					<br />

					<p className="create-font-size" >Bild:</p>



					<label htmlFor="icon-button-file">

						<Input accept="image/*" id="icon-button-file" type="file" />
						<IconButton size="large" aria-label="upload picture" component="span">
							<PhotoCamera sx={{ fontSize: 45, color: "#28a745" }} />
						</IconButton>

					</label>




					<p className="create-font-size" >*Beschreibung:</p>
					<textarea cols="100" className="create-description-input" rows="10" maxLength="350" required></textarea>

					<br />
					<br />

					<p className="create-font-size" >*Standort:</p>
					<img src={require('./img/map_create.png')} className="MapCreate" />

					<br />
					<br />
					<br />

					<button type="submit" className="btn btn-success btn-lg button" >Erstellen</button>
				</form>
			</div>

			<NavbarBottom classstart="under-navitem-unselected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-unselected" />
		</div>
	)

}