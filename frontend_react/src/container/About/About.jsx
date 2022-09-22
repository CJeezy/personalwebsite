import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants'
import { urlFor, client } from '../../client';
import './About.scss';

// const abouts = [
//   {title: 'Web Development', description: 'I have a passion for creating visually pleasing websites that are easy to read and fun to interact with!', imgUrl: images.about01},
//   {title: 'Team Oriented', description: 'Being a part of competitive sports my whole life, I understand the importance of team building and working as one cohesive unit.', imgUrl: images.about02},
//   {title: 'Strive to learn', description: 'I am always looking for ways to better my craft. Whether that be in Computer Science or cooking, I always look for ways to improve and normally becomes a sponge for all types of information.', imgUrl: images.about03},
//   {title: 'Background', description: 'Originally from San Diego, California, I am now located in New York City! In my spare time I love playing volleyball and trying to find the best ramen in NYC.', imgUrl: images.about04}
// ]

const About = () => {

  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
     <h2 className='head-text'>
        Get to know me!
     </h2>

     <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}>
              <img src={urlFor(about.imgUrl)} alt={about.title}/>
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
     </div>
    </>
  )

}

export default AppWrap(About, 'about')