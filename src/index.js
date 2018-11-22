import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function tick() {
//     const element = (
//     <div>
//         <h1>Hello World</h1>
//         <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
