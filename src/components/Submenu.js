import React from 'react';
import './Navbar.css';

function Submenu() {
  return (
    <ul className="nav__submenu" onMouseOver={ () => {
      var side_menu = document.querySelector('.nav__submenu');
      side_menu.style.display = "block";
    }} 
    onMouseLeave={
      () => {
        var side_menu = document.querySelector('.nav__submenu');
      side_menu.style.display = "none";
      }
    }>
      <li className="nav__submenu-item ">
        <a>Placements</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Internships</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Hackathons</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Speaker</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Coding Contest</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Scholarships</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Research</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Quiz</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Non Technical</a>
      </li>
    </ul>
  )
}

export default Submenu;
 