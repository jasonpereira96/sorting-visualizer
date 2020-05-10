import React from 'react';
import Toolbar from './components/Toolbar'
import Box from './components/Box'

class App extends React.Component {
	render() {
		return (
			<div id='full-screen'>
				<Toolbar></Toolbar>
				<div id='background'>
					<Box></Box>
				</div>
			</div>
		);
	}
}

export default App;
