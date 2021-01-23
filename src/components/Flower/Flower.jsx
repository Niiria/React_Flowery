import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { FlowerContex } from '../../contex/FlowerState';
import {ThemeContex } from '../../contex/ThemeContex';

const Flower = (props) => {
  const contex = useContext(FlowerContex);
  const flower = contex.flowers.find(
    element => element.name === props.match.params.id
  );
  return (
    <ThemeContex.Consumer>
      {(theme)=>(
        <section className="flower" style={{ background: theme.defaultTheme ? theme.light : theme.dark}}>
          <div>
            <Link to="/flowers">
              <img src="https://image.flaticon.com/icons/svg/860/860774.svg" alt="arrow" />
            </Link>
            <h1>
              {flower.id}
              .  
              {flower.name}
            </h1>
            <button
              type="button"
              onClick={()=>{
              props.history.push('/flowers');
              contex.removeFlower(flower.id);}}
            >
              DELETE
            </button>
          </div>
          <img src={flower.url} alt="flower" />
        </section>
    )}
    </ThemeContex.Consumer>
  );
};

export default Flower;