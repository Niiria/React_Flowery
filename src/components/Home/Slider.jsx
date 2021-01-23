import React, { useState, useEffect } from 'react';
import { ThemeContex } from '../../contex/ThemeContex';

const Slider = () => {
  const [sliderPhotos] = useState([
    { url: 'https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg', id: 0 },
    { url: 'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_960_720.jpg', id: 1 },
    { url: 'https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_960_720.jpg', id: 2 }]);
  const [current, setCurrent] = useState(0);
  const [animation, setAnimation] = useState(true);
  const [pause, setPause] = useState(false);

  const handleChangeImg = (direction) => {
    switch (direction) {
      case 'right': {
        setAnimation(false);
        setTimeout(() => {
          if (current === sliderPhotos.length - 1) { setCurrent(0); } else { setCurrent(current + 1); }
        }, 1000);
        setTimeout(() => {
          setAnimation(true);
        }, 1000);
        break;
      }
      case 'left': {
        setAnimation(false);
        setTimeout(() => {
          if (current === 0) { setCurrent(sliderPhotos.length - 1); } else { setCurrent(current - 1); }
        }, 1000);
        setTimeout(() => {
          setAnimation(true);
        }, 1000);
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) { handleChangeImg('right'); }
    }, 2000);
    return () => clearInterval(interval);
  });

  const currentImg = sliderPhotos.map((element, index) => {
    if (current === index) {
      return <li className="activeImg" key={element.id} onClick={() => setCurrent(element.id)} aria-hidden="true">.</li>;
    }
    return (
      <li
        key={element.id}
        onClick={() => setCurrent(element.id)}
        aria-hidden="true"
      >
        .
      </li>
    );
  });

  return (
    <ThemeContex.Consumer>
      {(contex) => (
        <div
          style={{ background: contex.defaultTheme ? contex.light : contex.dark }}
          className="home_slider"
          onMouseOver={() => setPause(true)}
          onFocus={() => 0}
          onMouseOut={() => setPause(false)}
          onBlur={() => 0}
        >
          <div className="buttons">
            <button style={{ background: contex.defaultTheme ? contex.light : contex.dark }} type="button" onClick={() => handleChangeImg('left')}>
              <img src="https://image.flaticon.com/icons/svg/271/271220.svg" alt="left-arrow" />
            </button>
            <button style={{ background: contex.defaultTheme ? contex.light : contex.dark }} type="button" onClick={() => handleChangeImg('right')}>
              <img src="https://image.flaticon.com/icons/svg/271/271228.svg" alt="right-arrow" />
            </button>
          </div>
          <img className={`home_img ${animation ? 'show' : 'hide'}`} src={sliderPhotos[current].url} alt="img" />
          <ul className="currentImg">
            {currentImg}
          </ul>
        </div>
      )}
    </ThemeContex.Consumer>
  );
};

export default Slider;
