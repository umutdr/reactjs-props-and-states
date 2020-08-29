import React, { useState } from 'react';
import './App.css';
//Imports Components
// import Nav from './components/Nav';
// import Tweets from './components/Tweets';

function App() {
	const [counter, setCounter] = useState(0);
	const [toggle, setToggle] = useState(false);

	const incrementTheCounter = () => {
		setCounter((prev) => prev + 1);
		console.log(`counter: ${counter}`);
	};

	const toggleActiveState = () => {
		setToggle((prev) => !prev);
		console.log(`state: ${!toggle}`);
	};

	return (
		<div className='App'>
			<h1 className={toggle ? 'active' : 'passive'}>Hello React</h1>
			<p>
				<strong>Counter: </strong>
				{counter}
			</p>
			<button onClick={incrementTheCounter}>Increment the Counter</button>
			<button onClick={toggleActiveState}>Toggle the State</button>
		</div>
	);
}

export default App;
