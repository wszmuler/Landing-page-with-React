import React from "react";

import injectContext from "./store/appContext";
import { TopBanner } from "./component/topbanner";
import { TopNavegationBar } from "./component/topnavegationbar";
import { Footer } from "./component/footer";
import MainBody from "./component/mainbody";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<TopNavegationBar />
			<div className="container">
				<TopBanner />
			</div>
			<MainBody />
			<Footer />
		</div>
	);
};

export default injectContext(Layout);
