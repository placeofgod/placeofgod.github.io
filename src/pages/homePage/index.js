import { useState } from 'react';

import MiniHomePage from '../miniHomePage';
import FullHomePage from '../fullHomePage';

import img from '../../image/me2.jpg';
import cover from '../../image/cover.jpg';


import { HomePageContainer } from './homePage.styles';


const HomePage = () => {
  const [ miniFull, setMiniFull ] = useState('+');
  const [ covered, setCovered ] = useState('no-show');
  const [ page, setPage ] = useState(<MiniHomePage />);

  const showFull = () => {
    if (covered === 'no-show') {
      setCovered('show')
      setMiniFull('x')
      setPage(<FullHomePage />)
    } else{
      setCovered('no-show')
      setMiniFull('+')
      setPage(<MiniHomePage />)
    }
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
      {page}
      <div className="add" onClick={showFull}>{miniFull}</div>
    </HomePageContainer>
  );
}

  export default HomePage;