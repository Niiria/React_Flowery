import React from 'react';
import './App.scss';
import {  HashRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import ThemeContexProvider from './contex/ThemeContex';
import Flowers from './components/Flowers/Flowers';
import Flower from './components/Flower/Flower';

import {FlowerProvider} from './contex/FlowerState';

function App() {
  return (
    <HashRouter>
      <ThemeContexProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <FlowerProvider>
            <Route exact path="/flowers" component={Flowers} />
            <Route exact path="/flowers/:id" component={Flower} />
          </FlowerProvider>
        </Switch>
        <Footer />
      </ThemeContexProvider>
    </HashRouter>
  );
}

export default App;
