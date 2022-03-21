import ReactDOM from "react-dom";

import "./css/index.css";

import { Petitions } from "./Petitions";
import { PetitionsActiveNewest } from "./PetitionsActiveNewest";
import { PetitionsActiveMostPopular } from "./PetitionsActiveMostPopular";

import { PetitionsAccepted } from "./PetitionsAccepted";
import { PetitionsAcceptedNewest } from "./PetitionsAcceptedNewest";
import { PetitionsAcceptedMostPopular } from "./PetitionsAcceptedMostPopular";



import { PetitionsRejected } from "./PetitionsRejected";
import { PetitionsRejectedNewest } from "./PetitionsRejectedNewest";
import { PetitionsRejectedMostPopular } from "./PetitionsRejectedMostPopular";



import { Crowdfunding } from "./Crowdfunding";
import { CrowdfundingActiveNewest } from "./CrowdfundingActiveNewest";

import { CrowdfundingSuccessful } from "./CrowdfundingSuccessful";
import { CrowdfundingSuccessfulNewest } from "./CrowdfundingSuccessfulNewest";

import { Filter } from "./Filter";

import { Map } from "./Map";

import { Profile } from "./Profile";

import { Report } from "./Report";

import { Supporters } from "./Supporters";

import { Upvoter } from "./Upvoter";
import { Downvoter } from "./Downvoter";

import { Donators } from "./Donators";

import { Questions } from "./Questions";

import { Comments } from "./Comments";
import { CommentsMostPopular } from "./CommentsMostPopular";

import { Share } from "./Share";

import { Info } from "./Info";

import { Search } from "./Search";

import { CreateAPetition } from "./CreateAPetition";

import { Activity } from "./Activity";

import { YourProfile } from "./YourProfile";

import { Imprint } from "./Imprint";

import { Privacy } from "./Privacy";

import { Settings } from "./Settings";

import { BrowserRouter, Routes, Route, } from "react-router-dom";


const app = document.getElementById("app");
ReactDOM.render(<BrowserRouter>
	<Routes>
		<Route path="/" element={<Petitions />} />
		<Route path="/petitionen-aktiv-neuste" element={<PetitionsActiveNewest />} />
		<Route path="/petitionen-aktiv-am-beliebtesten" element={<PetitionsActiveMostPopular />} />

		<Route path="/petitionen-akzeptiert" element={<PetitionsAccepted />} />
		<Route path="/petitionen-akzeptiert-neuste" element={<PetitionsAcceptedNewest />} />
		<Route path="/petitionen-akzeptiert-am-beliebtesten" element={<PetitionsAcceptedMostPopular />} />

		<Route path="/petitionen-abgelehnt" element={<PetitionsRejected />} />
		<Route path="/petitionen-abgelehnt-neuste" element={<PetitionsRejectedNewest />} />
		<Route path="/petitionen-abgelehnt-am-beliebtesten" element={<PetitionsRejectedMostPopular />} />

		<Route path="/crowdfunding" element={<Crowdfunding />} />
		<Route path="/crowdfunding-aktiv-neuste" element={<CrowdfundingActiveNewest />} />

		<Route path="/crowdfunding-erfolgreich" element={<CrowdfundingSuccessful />} />
		<Route path="/crowdfunding-erfolgreich-neuste" element={<CrowdfundingSuccessfulNewest />} />

		<Route path="/filter" element={<Filter />} />

		<Route path="/karte" element={<Map />} />

		<Route path="/profil" element={<Profile />} />

		<Route path="/melden" element={<Report />} />

		<Route path="/spendenzusagen" element={<Supporters />} />

		<Route path="/upvoter" element={<Upvoter />} />
		<Route path="/downvoter" element={<Downvoter />} />

		<Route path="/neuste-kommentare" element={<Comments />} />
		<Route path="/beliebteste-kommentare" element={<CommentsMostPopular />} />

		<Route path="/teilen" element={<Share />} />

		<Route path="/info" element={<Info />} />

		<Route path="/suche" element={<Search />} />

		<Route path="/petition-erstellen" element={<CreateAPetition />} />

		<Route path="/activity" element={<Activity />} />

		<Route path="/dein-profil" element={<YourProfile />} />

		<Route path="/impressum" element={<Imprint />} />

		<Route path="/datenschutz" element={<Privacy />} />

		<Route path="/spender" element={<Donators />} />

		<Route path="/fragen" element={<Questions />} />

		<Route path="/einstellungen" element={<Settings />} />
	</Routes>
</BrowserRouter>, app);