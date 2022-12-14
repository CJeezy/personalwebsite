import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariance = {
  whileInView : {
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div 
        whileInView={{x: [100, 0], opacity: [0, 1]}}
        transition={{duration: 1.5}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I'm</p>
              <h1 className='head-text'>CJ</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Software Engineer</p>
            <p className='p-text'>Boba Enthusiast</p>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Contact Me!</p>
            <p className='p-text'>cj@christiandumadag.com</p>
            <p className='p-text'>New York, New York</p>
          </div>

        </div>
      </motion.div>
        
      <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{duration: 1.5, delayChildren: 0.5}}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile_bg'/>
        <motion.img
          whileInView={{ scale: [0, 1]}}
          transition={{duration: 2, ease: 'easeInOut'}}
          src={images.circle} alt='profile_circ'
          className='overlay_circle'
        />     

      </motion.div>

      <motion.div
        variant={scaleVariance}
        whileInView={scaleVariance.whileInView}
        className='app__header-circles'
        >
           {[images.react, images.javascript, images.cpp].map((circle, index ) => (
            <div className='circle-cmp app__flex' key={'circle-${index}'}>
              <img src={circle} alt='circle'/>
            </div>
           ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')