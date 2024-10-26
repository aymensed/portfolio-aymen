import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Editor from './Editor';
import Web3D from './modules/web3d';
import AA2 from './modules/AA2';
import WM from './modules/WM';
import SMA from './modules/SMA';
import RI from './modules/RI';
import ED from './modules/ED';

import './App.css';

// Importer d'autres modules...

function App() {
    return ( <
        BrowserRouter basename = "/portfolio-aymen" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/editor"
        element = { < Editor / > }
        /> <
        Route path = "/Web3D"
        element = { < Web3D / > }
        /> <
        Route path = "/AA2"
        element = { < AA2 / > }
        /> <
        Route path = "/WM"
        element = { < WM / > }
        /> <
        Route path = "/RI"
        element = { < RI / > }
        /> <
        Route path = "/SMA"
        element = { < SMA / > }
        /> <
        Route path = "/ED"
        element = { < ED / > }
        /> { /* Autres routes pour les modules */ } <
        /Routes> <
        /BrowserRouter>
    );
}

export default App;