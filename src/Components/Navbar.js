import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">Youtube-Clone</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                      <li className="nav-item">
                          <NavLink className="nav-link active" aria-current="page" to="/search">Search</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/favourites">Favourites</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/stats">Stats</NavLink>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}
