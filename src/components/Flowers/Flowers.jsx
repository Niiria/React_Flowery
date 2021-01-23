import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {FlowerContex} from '../../contex/FlowerState';
import {ThemeContex } from '../../contex/ThemeContex';
import AddFlower from './AddFlower';



const Flowers = () => {

  const contex = useContext(FlowerContex);
  console.log(contex.flowers);

  const FLOWER_LIST = contex.flowers.length!==0 ? contex.flowers.map((flower)=>{
    return(
      <li key={flower.id}>
        <div style={{backgroundImage: `url(${flower.url})`}} />
        <Link to={`/flowers/${flower.name}`}>
          <h1>{flower.name}</h1>
        </Link>
      </li>
    );
  }) : (
    <div>no elements</div>
  );

  return(
    <ThemeContex.Consumer>
      {(theme)=>(
        <section className="flowers" style={{ background: theme.defaultTheme ? theme.light : theme.dark }}>
          <AddFlower addFlower={contex.addFlower} />
          <ul className="flower_list">
            {FLOWER_LIST}
          </ul>
        </section>
  )}
    </ThemeContex.Consumer>
  );
    

 
};

export default Flowers;
