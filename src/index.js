import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './my.css';

let posts = [
	{
		id: 1,
		message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		likesCounter: 25,
		date: "XX.XX.XXXX AA:AA"
	},
	{
		id: 2,
		message: "Lorem ipsum dolor sit amet.",
		likesCounter: 44,
		date: "YY.YY.YYYY BB:BB"
	},
	{
		id: 3,
		message: "Lorem ipsum dolor sit amet, consectetur adipisicing " +
			"elit. Corporis dolores earum ex non perspiciatis quia, totam.",
		likesCounter: 60,
		date: "ZZ.ZZ.ZZZZ CC:CC"
	}
];

let dialogs = [
	{id: 1, name: "Olechka"},
	{id: 2, name: "Arthour"},
	{id: 3, name: "Ruslan"},
	{id: 4, name: "Dima"},
	{id: 5, name: "Artyom"}
];

let messages = [
	{id: 1, message: "Hello!"},
	{id: 2, message: "How are you?"},
	{id: 3, message: "Have a nice day!"},
	{id: 4, message: "I'm fine))"},
	{id: 5, message: "Good Bye!"}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

registerServiceWorker();
