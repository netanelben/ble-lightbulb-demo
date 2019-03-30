import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(
//     <MuiThemeProvider>
//         <App />
//     </MuiThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
