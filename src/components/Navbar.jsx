import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import a2sv_img from '../asset/favicon.ico'
function Navbar() {
  return (
    <header class="flex flex-row h-[60px]   justify-between px-5 items-center mt-5 ">
      <nav class = ' h-2/3  ' ><img src="https://a2sv.org/logos/logo-blue.png" alt="" class = ' w-full h-full object-contain' /></nav>
      <nav>
        <ul class="flex">
          <li class = "mx-4">Home</li>
          <li class = "mx-4">
            <span>Teams</span> <KeyboardArrowDownIcon />{" "}
          </li>
          <li class = "mx-4">Success Stories</li>
          <li class = "mx-4">About Us</li>
          <li class = "mx-4">Get Involved</li>
        </ul>
      </nav>
      <nav>
        <button class="p-2 px-3 bg-blue-500 rounded ">Donate</button>
      </nav>
    </header>
  );
}

export default Navbar;
