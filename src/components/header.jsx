import React from 'react';

let styles = {
	paddingTop: '3px',
    paddingRight: '3px',
    paddingBottom: '3px',
    paddingLeft: '3px',
	fontFamily: 'Roboto',
	fontSize: '18px',
	textAlign: 'left',
};

let userName = 'Jose Dominguez';

let userEmail = 'jose.dominguez@gmail.com';

function Header() {
	return (
		<div>
			<header className="navbar"> </header>
			<p className="username" style={styles}>{userName}</p>
			<p className="useremail" style={styles}>{userEmail}</p> 
			<hr />
		</div>
		)
}

export default Header;
	