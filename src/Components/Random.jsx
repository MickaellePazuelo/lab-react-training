import Random from "./Components/Random";


function Random(props){
  
  return (
  <Random>
      <h2>{props.min}</h2>
      <h2>{props.max}</h2>
  </Random>
    
  );
};

export default Random;