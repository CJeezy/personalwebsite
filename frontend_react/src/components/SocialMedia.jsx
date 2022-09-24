import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin,} from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/CJeezy"><BsGithub/></a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/christian-dumadag-ab451a163/'><BsLinkedin/></a>
        </div>
        <div>
          <a href='https://www.instagram.com/cjeezy_/'><BsInstagram/></a>
        </div>
    </div>
  )
}

export default SocialMedia 