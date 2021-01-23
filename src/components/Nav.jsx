import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ThemeContex } from '../contex/ThemeContex';

const Nav = () => (
  <ThemeContex.Consumer>
    {(contex) => (
      <nav style={{ background: contex.defaultTheme ? contex.light : contex.dark }}>
        <div className="logo">
          <Link to="/" onClick={() => contex.handleTheme()}>
            <h1>
              Flowerly
            </h1>
          </Link>
          <img src="https://cdn.pixabay.com/photo/2016/04/01/09/00/abstract-1299099_960_720.png" alt="flowers" />
        </div>
        <ul>
          <li>
            <NavLink exact to="/flowers">Flowers</NavLink>
          </li>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    )}
  </ThemeContex.Consumer>

);

export default Nav;
