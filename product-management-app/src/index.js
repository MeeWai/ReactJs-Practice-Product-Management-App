import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fade from '@material-ui/core/Fade';
import {SnackbarProvider} from 'notistack';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <SnackbarProvider maxSnack={3}  preventDuplicate anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
    }} TransitionComponent={Fade}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </SnackbarProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
