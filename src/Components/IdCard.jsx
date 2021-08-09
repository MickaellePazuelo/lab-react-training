import IdCard from "./Components/IdCard";


const IdCard = (props) => {
  
  return (
  
      <IdCard>
      <div className="Card-profile">
      <img src={props.picture} alt=""/>
          <h2>Name:{props.firstName}</h2>
        <h2>Last Name:{props.lastName}</h2>
        <h2>Gender:{props.gender}</h2>
        <h2>Height:{props.height}</h2>
        <h2>Date of Birth:{props.date}</h2>
       
        </div>
      </IdCard>
  );
};

export default IdCard;