import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles/styles.scss';
import {Grid} from '@material-ui/core';


import Products from './components/Products';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';


// Connecting our app to our global state redux store
// xx Wrap the whole app in a "store provider"
// -- Pick individual components to "connect" and become "consumers"

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />
                <div className ='main-div'>
                <Categories />
                <Grid item xs={3}>
                        </Grid>
                <Products />
                </div>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
