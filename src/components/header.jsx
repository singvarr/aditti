import React from "react";

import Menu from "./menu.jsx";
import BucketContainer from "../containers/BucketContainer";

function Header(props) {
	return (
		<header key='header'>
			<div className="wrapper">
				<div className="logo">
					<img src="./assets/img/logo.png" alt="logo"/>
				</div>
				<form action="post" id="search-form">
					<input 
						type="search"
						name="search-field"
					/>
					<button 
						type="submit"
						className="flaticon-search"
					/>
				</form>
				<BucketContainer/>
			</div>
			<Menu menu={props.links}/>
		</header>
	)
}

export default Header;