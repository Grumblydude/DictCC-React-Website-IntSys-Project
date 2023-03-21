import { Component } from "react";
import "./OldNavbarStyles.css";

import { MenuData } from "./MenuData";
import { SvgIcon } from "@mui/material";
import "./OldNavbarStyles.css";

class OldNavbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo"> Dicc.t
          <i className="DictIcon">
          </i>
        </h1>
        <ul className="nav-menu">
          {MenuData.map((item, index)=> {
            return(
              <li key={index}>
              <a href={item.url} className={item.cName} >
              <i>
                <SvgIcon className="SvgIcons" component={item.icon} fontSize="large" inheritViewBox />
                </i>
              {item.title}
              </a>
            </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;


{/*          <li>
            <a href="index.html">
              <LayersOutlinedIcon className="LayersOutlinedIcon"></LayersOutlinedIcon> Vokabeln
            </a>
          </li>
          <li>
            <a href="index.html">
              <PeopleOutlinedIcon className="PeopleOutlinedIcon"></PeopleOutlinedIcon>
            </a>
          </li>
          <li>
            <a href="index.html">
              <HelpOutlineOutlinedIcon className="HelpOutlineOutlinedIcon"></HelpOutlineOutlinedIcon>
            </a>
          </li>
*/}