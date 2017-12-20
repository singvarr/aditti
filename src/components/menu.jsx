import React from 'react';

function Menu(props) {
	return (
		<nav id="main-menu">
			<ul>
				{props.menu.map((item, i) => {
					return <li key={i}><a href={item.href}>{item.name}</a></li>
				})}	
			</ul>
		</nav>
	)
}

export default Menu;