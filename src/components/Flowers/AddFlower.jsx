import React, {useState} from 'react';

const AddFlower = ({addFlower}) => {
  const [flower, setFlower] = useState({id: null, name: '', url: '' });
  const [error, setError] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(1);
    console.log('Submit', flower);
    if(flower.name.length>3  && flower.url.length>5){
      addFlower(flower);
      setError(false);
      setFlower({id: null, name: '', url: '' });
    }
    else{
      setError(true);
    }

  };

  const handleInput = (e) =>{
    switch(e.target.id){
      case 'name':
        setFlower({id:null,name:e.target.value, url:flower.url });
        break;
      case 'url':
        setFlower({id:null,name:flower.name,url:e.target.value});
        break;
      default:
      break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Flower name
          <input type="text" id="name" onChange={handleInput} autoComplete="off" />
        </label>
        <label htmlFor="url">
          Flower URL
          <input type="text" id="url" onChange={handleInput} autoComplete="off" />
        </label>
      </div>
      <button type="submit">Submit</button>
      {error === true &&
      <h1 className="red">-Error-</h1>}
    </form>
  );
};

export default AddFlower;
