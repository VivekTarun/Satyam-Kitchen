import React from 'react';
import images from '../constants/images';
import Navbar from '../components/Navbar/Navbar'
import './menu.css'
const Menu = () => {
  return (
    <div>
     <Navbar />
     <img src={images.menu2} alt='menu-2' />
     <img src={images.menu3} alt='menu-3' />
     <img src={images.menu4} alt='menu-4' />
     <img src={images.menu5} alt='menu-5' />
     <img src={images.menu6} alt='menu-6' />
     <img src={images.menu7} alt='menu-7' />
     <img src={images.menu8} alt='menu-8' />
    </div>
  )
}

export default Menu;