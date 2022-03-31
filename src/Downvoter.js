import { NavbarBottom } from "./NavbarBottom";

import { Link } from "react-router-dom";

export const Downvoter = () => {


	return (

		<div >
			<div className="casual-header-div">
				<h4 className="headline">Downvoter</h4>

			</div>

			<div className="casual-menu">
				<div className="voter-div">
					< p>
						<span className="supporter-list" >
							<Link to="/profil" className="linkblack"   >
								<img src={require('./img/profile.png')} className="supporter-list-image" /> (Name)
							</Link>
						</span>

						<span className="time-supported" > (Zeit)
						</span>


					</p>
					<p className="anonym supporter-list" >Anonym
						<span className="time-supported" > (Zeit)
						</span>

					</p>
					<p className="supporter-list" >
						<Link to="/profil" className="linkblack"   >
							<img src={require('./img/profile.png')} style={{ visibility: "hidden" }} className="supporter-list-image" /> (Name)
						</Link>
						<span className="time-supported" > (Zeit)
						</span>

					</p>
				</div >
			</div >



			<NavbarBottom classstart="under-navitem-selected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-unselected" />
		</div >
	)

}