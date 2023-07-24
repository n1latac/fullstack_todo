import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import Counter from './Counter';
import Clicker from './Clicker';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Counter/>
        <Clicker/>
    </Provider>
    //<App />
);

