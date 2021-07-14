import React from 'react';
import { Provider } from 'react-redux';

import './styles.scss';

import Titlebar from './Titlebar/Titlebar';
import PagesContainer from './Pages/PagesContainer';
import Scratchpad from './Scratchpad/Scratchpad';
import configureStore from './redux/configureStore';

const MCDU = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <div className="mcdu-outer">
                <div className="mcdu-inner">
                    <Titlebar />
                    <div className="mcdu-content">
                        <PagesContainer />
                    </div>
                    <Scratchpad />
                </div>
            </div>
        </Provider>

    );
};

export default MCDU;