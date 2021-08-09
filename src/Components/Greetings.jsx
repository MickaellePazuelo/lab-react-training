import Greetings from "./Components/Greetings";


function Greetings(props){
  
  return (
  
      <Greetings>
      <div className="GreetingMessage">
          <h2>{props.lang}</h2>
        <h2>Last Name:{props.children}</h2>
        </div>
      </Greetings>
      

  );
};

export default Greetings;