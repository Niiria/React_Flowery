export default (state, action) =>{
  switch (action.type) {
    case 'ADD_FLOWER':{
      return{...state, flowers: [...state.flowers, action.payload]};
    }
    case 'DELETE_FLOWER':{
      return{...state, flowers: action.payload};
    }
    default:
      return state;
  }
};