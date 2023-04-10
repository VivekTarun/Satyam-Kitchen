import React from 'react';
import { SubHeading } from '../../components';
import {images} from "../../constants"
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title = "Chase the new flavour" />
      <h1 className='app__header-h1'>The key to fine dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Places we prefer vary depending on our taste, culture, mood, previous experience and our first impression of the place.</p>
      <button type='button' className='custom__button'><Link to = '/menu'>Explore menu</Link></button>
    </div>
    <div className='app__wrapper_img'>
    <img src={images.welcome} alt ="header img"/>
    </div>
  </div>
);

export default Header;
