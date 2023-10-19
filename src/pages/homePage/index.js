import { useState } from 'react';

import img from '../../image/me2.jpg';
import cover from '../../image/cover.jpg';
import Threads from '../../components/icons/threads';
import X from '../../components/icons/x';
import Facebook from '../../components/icons/facebook';
import Instagram from '../../components/icons/instagram';
import Medium from '../../components/icons/medium';
import Linkedin from '../../components/icons/linkedin';
import Quora from '../../components/icons/quora';
import Reddit from '../../components/icons/reddit';
import Tumblr from '../../components/icons/tumblr';
import Whatsapp from '../../components/icons/whatsapp';

import { HomePageContainer } from './homePage.styles';


const HomePage = () => {
  const [ covered, setCovered ] = useState('no-show');

  const showFull = () => {
    covered === 'no-show' ? 
      setCovered('show') : setCovered('no-show');
  };

  return (
    <HomePageContainer pos={covered}>
      <div className="menu">...</div>
      <div className="header">
        <div className='cover-box'>
          <img src={cover} alt='cover' />
        </div>
        <span className='pic-box'>
          <img src={img} alt='me' />
        </span>
      </div>
      <div className="overview">
        <h2>@placeofgod</h2>
        <div className="info">Digital business consultant, computer scientist and project manager.</div>
      </div>
      <div className="contacts">
        <Whatsapp />
        <Facebook />
        <Linkedin />
        <Instagram />
        <Medium />
        <Quora />
        <Reddit />
        <Tumblr />
        <Threads />
        <X />
      </div>
      <div>

      </div>
      <div className="add" onClick={showFull}>+</div>
    </HomePageContainer>
  );
}

  export default HomePage;