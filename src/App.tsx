import React from 'react';
import Masthead from './components/masthead';
import AboutUs from './components/AboutUs';
import Skills from "./components/Skills";

const App = () => {
    return (
        <div className="App">
            <Masthead />
            <AboutUs />
            <Skills />
        </div>
    );
};

export default App;
