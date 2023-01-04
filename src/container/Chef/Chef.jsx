import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper secion__padding'>
    <div className='app__wrapper_img app__wraper_img-reverse '>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title= "chef's word"/>
      <h1 className='headtext__cormorant'>What we Believe In</h1>

      <div className='app__chef-content'>

        <div className='app__chef-content_quote'>
          <img src= {images.quote} alt="quote" />
          <p className='p__oopensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo enim eos cum maiores, illo quo similique est in eaque!</p>
        </div>

        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque soluta dolorem? Maiores fuga consequatur tempora voluptatem, debitis neque soluta quibusdam tempore enim eveniet sint vero omnis odit placeat non cumque et, optio nam molestias blanditiis voluptatum doloribus sunt voluptate quos? Odio corrupti maxime voluptas molestias pariatur saepe blanditiis! Non voluptatibus ipsam aliquam aperiam earum? Nobis!</p>
      </div>

      <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & founder</p>
          <img src={images.sign} alt ="sign"/>
      </div>

    </div>
  </div>
);

export default Chef;
