
import { NavbarBottom } from "./NavbarBottom";
import { Link } from "react-router-dom";



export const Activity = () => {




	return (


		<div >
			<div className="casual-header-div">

				<h4 className="headline-activity">Aktivität</h4>

				<Link to="" className="notification-settings-image-link"><img src={require('./img/notification-settings.svg')}  className="notification-settings-image" /></Link>
				<p className="subheader-activity">
					<Link to="" ><strong> Benachrichtigungen </strong> </Link>
					<br />
					<Link to="" >Petitionen</Link>
					<br />
					<Link to="" className="crowdfundingcampaigns-activity"  >Crowdfundingkampagnen</Link>
				</p>

			</div>

			<NavbarBottom classstart="under-navitem-unselected" classsearch="under-navitem-unselected" classactivity="under-navitem-selected" classprofile="under-navitem-unselected" />
		</div>
	)

}