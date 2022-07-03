import React from 'react';
import {render} from 'react-dom';
import Test from '@models/react-comp.jsx'
import "@/styles/styles.css"
import '@/styles/test_scss.scss'

const App = () => {
	const testVar = 'foo bar';

	return (
		<div className="container container_mark">
			App
			<div className="box_scss box_scss_mix">
				<div className="box-inn">
					<h1>SCSS</h1>
				</div>
			</div>
			<Test test_var={testVar}/>
		</div>
	);
};

render(<App />, document.getElementById('root'));
