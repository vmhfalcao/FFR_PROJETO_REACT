import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

import './css-main/normalize.css';
import './css-main/reset.css';
import './css-main/main.css';


const App = () => (   
    <div id="conteiner">    
    <Header/>
    
    <Section/>
 
    <Footer/>
    </div>
);

export default App;
