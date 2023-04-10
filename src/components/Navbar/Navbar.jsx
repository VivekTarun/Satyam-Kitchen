import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdImageSearch, MdOutlineResturantMenu } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom';

import './Navbar.css';
import images from '../../constants/images'


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className='app__navbar-logo'>
        <Link to = "/"><img src={images.gericht} alt='app logo' /></Link>
      </div>

      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'>
          <Link to="/menu">Menu</Link>
        </li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contacts</a></li>
      </ul>

      <div className='app__navbar-login'>
        {/* <a href='#login' className='p__opensans'>Log In  /  Register</a> */}
        <Link to="/login" className='p__opensans'>Log In | Register</Link>
        <div />
        {/* <a href='/' className='p__opensans'>Book Table</a> */}
        <Link className='p__opensans' to= "/booktable">Book Table</Link>
      </div>


      <div className='app__navbar-smallscreen'>

        <GiHamburgerMenu color='#DCCA87' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>

            <AiOutlineClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />

            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><Link to = '/'>Home</Link></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><Link to ='/menu'>Menu</Link></li>
              <li className='p__opensans'><a href='#awards'>Awards</a></li>
              <li className='p__opensans'><a href='#contacts'>Contacts</a></li>
            </ul>

          </div>
        )}

      </div>

    </nav>
  )
};

export default Navbar;
