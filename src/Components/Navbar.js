import React from 'react';
import { NavLink } from 'react-router-dom';
import { UilEstate, UilHeartAlt, UilSearch, UilYoutube } from '@iconscout/react-unicons';

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid mx-2">
              <NavLink className="navbar-brand" to="/search"><UilYoutube color='red' size={45}/></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                      <li className="nav-item">
                          <NavLink className="nav-link " aria-current="page" to="/search">Search <UilSearch size={18}/></NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/favourites">Favourites <UilHeartAlt size={18}/></NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/stats">Stats <UilEstate size={18}/></NavLink>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}
